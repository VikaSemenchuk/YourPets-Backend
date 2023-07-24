const User = require('../../models/users/users');
const { subscpiptionUserUpdateValiadation } = require('../../valiadators/joiValiadator');
const path  = require('path');
var Jimp = require("jimp");

const getCurrent = async (req, res) => {
    try {
        const { email } = req.user;
        const userI = await User.findOne({ email });
        if (!userI) {
            return res.status(401).json({
                message: "Email or password is wrong"
            });
        }
        return res.status(200).json({ userI })
    } catch (err) {
        res.status(500).json({ message: 'Ooops... Something wrong in DB' });
    }
}

const changeUserData = async (req, res) => {
    const { name, email, birthday, phone, city } = req.body;
    try {
        const { id } = req.user;
        const renewUser = await User.findByIdAndUpdate(id, req.body,  { new: true });
        // const renewUser = await User.findByIdAndUpdate(id, { name, email, birthday, phone, city });
        return  res.status(201).json(renewUser);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Ooops... Something wrong in DB' });
    }
}

module.exports = {
    getCurrent,
    changeUserData
}