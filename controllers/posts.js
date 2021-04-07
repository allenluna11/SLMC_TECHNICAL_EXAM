import {PostsData, CommentData, AlbumData, PhotoData, TodoData} from "../models/posts.js";
import fetchData from "node-fetch";

export const posts = async (req, res) => {
    
    try {
    const data = await PostsData.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }

}

export const comment = async (req, res) => {

    try {

        const data = await CommentData.find();
        
        res.status(200).json(data);

    } catch (error) {

        console.log(error);
        
    }

}

export const album = async (req, res) => {

    try {

        const data = await AlbumData.find();
        
        res.status(200).json(data);

    } catch (error) {

        console.log(error);
        
    }

}

export const photo = async (req, res) => {
  
    
    try {

        const data = await PhotoData.find();
        
        res.status(200).json(data);

    } catch (error) {

        console.log(error);
        
    }

}
export const todo = async (req, res) => {

    try {

        const data = await TodoData.find();
        
        res.status(200).json(data);

    } catch (error) {

        console.log(error);
        
    }

}

