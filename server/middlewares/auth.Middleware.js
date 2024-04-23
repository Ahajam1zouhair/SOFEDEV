import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const UNAUTHORIZED_ERROR = "Not authorized";
const TOKEN_FAILED_ERROR = "Token failed";

export const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({
          error: "This account does not exist",
        });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: TOKEN_FAILED_ERROR });
      throw new Error(TOKEN_FAILED_ERROR);
    }
  }

  if (!token) {
    res.status(401).json({ message: UNAUTHORIZED_ERROR });
    throw new Error(UNAUTHORIZED_ERROR);
  }
});
