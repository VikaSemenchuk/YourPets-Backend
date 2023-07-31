const { multer } = require("./cloudinary");
const { storage } = require("./cloudinary");
const { upload } = require("./cloudinary");

module.exports = {
  multer,
  storage,
  upload
};
