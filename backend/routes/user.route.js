import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getProfile,followunFollowerUser,getSuggestedUsers ,updateUser} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/profile/:userName", protectRoute, getProfile);
router.get("/follow/:id", protectRoute, followunFollowerUser);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.get("/update", protectRoute, updateUser)

export default router;
