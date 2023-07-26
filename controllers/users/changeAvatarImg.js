const User = require('../../models/users/users');
require('dotenv').config('../../.env');          


const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dxmtevsut',
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: 'petsshop',
            allowed_formats: ['jpg', 'jpeg', '.png'],
            public_id: file.originalname,
            transformation: [
                { width: 500, height: 500 },
                { width: 300, height: 300 },
            ]
        }
    }
})

const upload = multer({ storage });

const changeAvatarImg = async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(500).json({ message: 'Your file is not valid or added' })
        }

console.log('req.file :>> ', req.file);

        const { _id, avatarURL } = req.user
        const userI = await User.findByIdAndUpdate(_id, { avatarURL: req.file.path });
        res.status(200).json(userI);
    }
    catch (err) {
        console.log(err)
        res.status(500);
    }
}

module.exports = { changeAvatarImg, upload, storage };