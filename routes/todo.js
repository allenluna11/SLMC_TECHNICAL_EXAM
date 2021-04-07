import express from "express";

import { todo } from "../controllers/posts.js";

const route = express.Router();


const TodoData = route.get("/", todo);

export default TodoData;