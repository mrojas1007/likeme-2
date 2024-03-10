const {
    getPost,
    createPost,
    updatePost,
    deletePost,
    updateLikePost
} = require("../models/postsModel.js");
// const error = require("")

const getPosts = async (req, res) => {
    try {
        const posts = await getPost();
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error obteniendo los posts" });
    }
}

const createPosts = async (req, res) => {
    try {
        const post = req.body;
        const values = Object.values(post);
        const response = await createPost(values);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error creando el post" });
    }
}

const updatePosts = async (req, res) => {
    try {
        const id = req.params.id;
        const post = req.body;
        const values = Object.values(post);
        values.push(id);
        const response = await updatePost(values);
        res.status(201).json(response);

    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error actualizando el post" });
    }
}

const deletePosts = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await deletePost(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error borrando el post" });
    }
}

const updateLikesPosts = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await updateLikePost(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error dando el like" });
        console.log(error);
    }
}

module.exports = { getPosts, createPosts, updatePosts, deletePosts, updateLikesPosts }