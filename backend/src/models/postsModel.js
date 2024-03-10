const { pool } = require("../../db/connectionDB.js");

const getPost = async () => {
    const response = await pool.query("SELECT * FROM posts ORDER BY id");
    return response.rows;
}

const createPost = async (values) => {
    await pool.query("INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)", values);
    return "El post ha sido insertado con éxito"
}

const updatePost = async (values) => {
    await pool.query("UPDATE posts SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4", values);
    return "El post ha sido actualizado con éxito"
}

const deletePost = async (id) => {
    await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    return "El post ha sido borrado con éxito"
}

const updateLikePost = async (id) => {
    const response = await pool.query("SELECT likes FROM posts WHERE id = $1", [id]);
    const likes = response.rows[0].likes + 1;
    await pool.query("UPDATE posts SET likes = $1 WHERE id = $2", [likes, id]);
    return "El like ha sido agregado con éxito"
}

module.exports = { getPost, createPost, updatePost, deletePost, updateLikePost }