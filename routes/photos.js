import express from "express";
import { photo } from "../controllers/posts.js";
const route = express.Router();

const PhotoData = route.get("/", photo);

export default PhotoData;