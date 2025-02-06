import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  createPosts,
  deletePost,
  createComment,
  likeUnlikePost,
  getAllPosts,
  getLikedPosts,
  getUserPosts,
  getFollowingPosts
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPosts);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, createComment);
router.delete("/:id", protectRoute, deletePost);

export default router;
