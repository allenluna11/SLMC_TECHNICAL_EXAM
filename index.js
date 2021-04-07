import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotevn from "dotenv";

import postsData from "./routes/posts.js"
import CommentData from "./routes/comment.js";
import AlbumData from "./routes/album.js";
import PhotoData from "./routes/photos.js";
import TodoData from "./routes/todo.js";

const app = express();
    dotevn.config();

app.use(express.json());
app.use(cors());

app.use("/posts", postsData);

app.use("/comment", CommentData);

app.use("/album", AlbumData);

app.use("/photo", PhotoData);

app.use("/todo", TodoData);

app.get("/", (req, res) => {
    res.send("SLMC TECHNICAL EXAM");
});

const DB_URL = "mongodb+srv://allen:jsmastery123@mern.wfxge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log(error));


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));