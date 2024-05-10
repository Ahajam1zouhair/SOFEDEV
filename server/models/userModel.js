import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image_profile: {
      url: {
        type: String,
        required: false,
        default:
          "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png",
      },
      publicId: {
        type: String,
        required: false,
        default: null,
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: false,
    },
    isSupervisor: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);
export default User;
