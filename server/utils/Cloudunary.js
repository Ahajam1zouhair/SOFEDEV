import cloudinary from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Cloudinary Upload Image
export const cloudinaryUploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
// Cloudinary Remove Image
export const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const result = await cloudinary.uploader.destroy(imagePublicId);
    return result;
  } catch (error) {
    console.log(error);
  }
};
