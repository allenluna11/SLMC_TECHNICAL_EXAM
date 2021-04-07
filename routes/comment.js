import express from "express";
import { comment } from "../controllers/posts.js";

const route = express.Router();

const commentData = route.get("/", comment);

export default commentData;

