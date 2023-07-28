const Notice = require("../../models/notices/notices");
const storage = require("../index");
require("dotenv").config("./.env");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dxmtevsut",
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const upload = multer({ storage });

const updateImgNotice = async (req, res) => {
  const { _id: owner } = req.user;

  try {
    if (!req.file) {
      res.status(500);
    }
    // const { _id } = req.user;
    // console.log("id :>> ", _id);

    const noticeUpdate = await Notice.create({
      ...req.body,
      fileURL: req.file.path,
      owner,
    });

    console.log("noticeI :>> ", noticeUpdate);

    res.status(201).json(noticeUpdate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... Something brakes in Avatar" });
  }
};

module.exports = {
  updateImgNotice,
};
