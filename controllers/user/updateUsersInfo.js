const User = require("../../models/users/users");

const updateUsersInfo = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(500).json({ message: "Your file is not valid or added" });
    }

    const { _id } = req.user;
    const userI = await User.findByIdAndUpdate(
      _id,
      { ...req.body, avatarURL: req.file.path },
      { new: true }
    );
    res.status(200).json(userI);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = { updateUsersInfo };
