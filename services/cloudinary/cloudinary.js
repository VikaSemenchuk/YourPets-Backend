require("dotenv").config("../../.env");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dxmtevsut",
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "petsshop",
      allowed_formats: ["jpg", "jpeg", "png"],
      public_id: file.originalname,
      transformation: [
        { width: 500, height: 500 },
        { width: 300, height: 300 },
      ],
    };
  },
});

const upload = multer({ storage });

module.exports = {
    multer, storage, upload
}