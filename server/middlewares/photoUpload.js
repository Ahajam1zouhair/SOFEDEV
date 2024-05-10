import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname

// Photo Storage
const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    // Generate a unique filename based on timestamp and original filename
    const uniqueFilename =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    cb(null, uniqueFilename);
  },
});

// Photo Upload Middleware
export const photoUpload = multer({
  storage: photoStorage,
  limits: {
    fileSize: 1024 * 1024, // Limit file size to 1MB
  },
  fileFilter(req, file, cb) {
    // Check if the uploaded file is an image
    if (!file.mimetype.startsWith("image")) {
      // Reject non-image files
      return cb(new Error("Please upload an image"), false);
    }
    // Accept the file
    cb(null, true);
  },
}).single("photo");
