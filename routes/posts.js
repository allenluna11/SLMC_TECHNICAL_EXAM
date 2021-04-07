import express from "express";
import { posts } from "../controllers/posts.js";


const route = express.Router();

const postsData = route.get("/", posts);

export default postsData;



