import express from "express";
import { album } from "../controllers/posts.js";

const route = express.Router();

const AlbumData = route.get("/", album);

export default AlbumData;