import asyncHandler from "express-async-handler";
import {
  ValidateCreateUser,
  ValidateLoginUser,
  ValidateUpdateUser,
} from "../requests/ValidateUser.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import {
  cloudinaryRemoveImage,
  cloudinaryUploadImage,
} from "../utils/Cloudunary.js";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// @desc    Register a new User
// @route   POST http://localhost:4000/api/user/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { error } = ValidateCreateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user = new User({
    name,
    email,
    password: hashedPassword,
  });
  const result = await user.save();
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  res.status(200).json({
    token,
    id: result._id,
    name: result.name,
    email: result.email,
    isAdmin: result.isAdmin,
  });
});

// @desc    Login a new User
// @route   POST http://localhost:4000/api/user/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { error } = ValidateLoginUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "invalid Email and password" });
  }
  const hashedPassword = await bcrypt.compare(password, user.password);
  if (!hashedPassword) {
    return res.status(400).json({ message: "invalid Email and password" });
  }
  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin, isSupervisor: user.isSupervisor },
    process.env.SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
  res.status(200).json({
    name: user.name,
    url: user.image_profile.url,
    id: user._id,
    isAdmin: user.isAdmin,
    token,
  });
});

// @desc    update a new User
// @route   PUT http://localhost:4000/api/user/update
// @access  Public
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});
// @desc    update a new User
// @route   PUT http://localhost:4000/api/user/update
// @access  Public
export const updateUser = asyncHandler(async (req, res) => {
  const { error } = ValidateUpdateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const updateuser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
      fields: { password: 0, isAdmin: 0, isSupervisor: 0 },
    }
  );
  res.status(200).json(updateuser);
});
// @desc    update a new User
// @route   PUT http://localhost:4000/api/user/update
// @access  Public
// export const changePassword = asyncHandler(async (req, res) => {

//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }
//   const updateuser = await User.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     {
//       new: true,
//       fields: { password: 0, isAdmin: 0, isSupervisor: 0 },
//     }
//   );
//   res.status(200).json(updateuser);
// });
export const changePasswordUser = asyncHandler(async (req, res) => {
  const { password, new_password } = req.body;

  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(new_password, salt);
  const updatedPassword = await User.findByIdAndUpdate(
    req.params.id,
    { password: hashedPassword },
    { new: true }
  );

  res.status(200).json({ message: "change Password successfully" });
});

// @desc    Profile Photo Upload
// @route   post http://localhost:4000/api/user/profile-photo-upload
// @access  only user
export const profilePhoto = asyncHandler(async (req, res) => {
  // 1. Validation
  if (!req.file) {
    return res.status(400).json({ message: "No file provided" });
  }
  // 2. Get the path to the file (assuming req.file.filename contains the correct filename)
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  // 3. Upload to Cloudinary
  const result = await cloudinaryUploadImage(imagePath);
  console.log(result);
  // 4. get the user from Db
  const user = await User.findById(req.user.id);
  // 5.  Delete the old profile photo if  exists
  if (user.image_profile.publicId !== null) {
    await cloudinaryRemoveImage(user.image_profile.publicId);
  }
  // 6. Change the profile photo field in the Db
  user.image_profile = {
    url: result.secure_url,
    publicId: result.public_id,
  };
  await user.save();
  // 7 . send response to client
  res.status(200).json({
    message: "Profile photo uploaded successfully",
    profilePhoto: { url: result.secure_url, publicId: result.public_id },
  });
  // 8. Delete the file from the server
  fs.unlinkSync(imagePath);
});

// @desc    Profile Photo Upload
// @route   post http://localhost:4000/api/user/profile-photo-upload
// @access  only user
export const deletePhoto = asyncHandler(async (req, res) => {
  // 4. get the user from Db
  const user = await User.findById(req.params.id);
  // 5.  Delete the old profile photo if  exists
  if (user.image_profile.publicId !== null) {
    await cloudinaryRemoveImage(user.image_profile.publicId);
  }
  user.image_profile = {
    url: "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png",
    publicId: null,
  };
  await user.save();
  // 7 . send response to client
  res.status(200).json({
    message: "remove current picture successfully",
    profilePhoto: { url: user.image_profile.url },
  });
});
