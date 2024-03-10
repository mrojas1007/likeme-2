const express = require("express");
const router = express.Router();
const {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts,
    updateLikesPosts
} = require("../src/controllers/postsController.js")

router.get("/posts", getPosts);
router.post("/posts", createPosts);
router.put("/post/:id", updatePosts);
router.delete("/posts/:id", deletePosts);
router.put("/posts/like/:id", updateLikesPosts);

module.exports = router;