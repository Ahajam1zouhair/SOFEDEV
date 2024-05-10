import { Router } from "express";
import {
  loginUser,
  profilePhoto,
  registerUser,
  updateUser,
} from "../controllers/controllerUser.js";
import { verifyTokenAndOnlyUser } from "../middlewares/auth.Middleware.js";
import { photoUpload } from "../middlewares/photoUpload.js";

const routerUser = Router();
// register
routerUser.route("/register").post(registerUser);
// login
routerUser.route("/login").post(loginUser);

// User By Id
routerUser.route("/profile/:id").put(verifyTokenAndOnlyUser, updateUser);

// Profile Photo
routerUser
  .route("/profile/profile-photo-upload/:id")
  .post(verifyTokenAndOnlyUser, photoUpload, profilePhoto);

export default routerUser;
