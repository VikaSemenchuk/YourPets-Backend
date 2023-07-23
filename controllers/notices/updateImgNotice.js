const Notice = require('../../models/notices/notices');
const storage = require('../index')
require('dotenv').config('./.env');

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'dxmtevsut', 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const upload = multer({ storage });

const updateImgNotice = async (req, res) => {
  try {
        if (!req.file) {
            res.status(500)
        }
        const { id } = req.params
        const noticeI = await Notice.findByIdAndUpdate(id, { fileURL: req.file.path });
        res.status(200).json(noticeI);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Ooops... Something brakes in Avatar' });
    }
}
  
  
module.exports = {
  updateImgNotice
}