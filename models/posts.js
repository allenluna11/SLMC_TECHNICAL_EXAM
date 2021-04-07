import mongoose from "mongoose";


///Posts Schema
const postSchema = {
    userId: String,
    id: String,
    title: String,
    body: String
}

export const PostsData = mongoose.model("Posts", postSchema);

///Comment Schema

const commentSchema = {
    postId: String,
    id: String,
    name: String,
    email: String,
    body: String,
}

export const CommentData = mongoose.model("Comments", commentSchema);

///Album Schema

const albumSchema = {
    userId: String,
    id: String,
    title: String
}

export const AlbumData = mongoose.model("Albums", albumSchema);

///Photo Schema

const photoSchema = {
    albumId: String,
    id: String,
    title: String,
    url: String,
    thumbnailUrl: String
}

export const PhotoData = mongoose.model("Photos", photoSchema);

///Todos schema

const todosSchema = {
    userId: String,
    id: String,
    title: String
}

export const TodoData = mongoose.model("Todos", todosSchema);

