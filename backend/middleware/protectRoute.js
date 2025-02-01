import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ error: "unauthorized: no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(400).json({
        error: "unauthorized : invalid token",
      });
    }

    const user = await User.findOne({ _id: decoded.userId }).select(
      "-password"
    );

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(`error in protectRoute middleware: ${error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export default protectRoute;
