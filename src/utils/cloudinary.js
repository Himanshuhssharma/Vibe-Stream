import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      } else {
        console.log("Local file deleted successfully");
      }
    }); // Removed the locally saved temp file as upload got failed
    return null;
  }
};

export default uploadOnCloudinary;
