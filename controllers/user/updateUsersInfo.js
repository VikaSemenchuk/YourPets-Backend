const User = require("../../models/users/users");

const updateUsersInfo = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(500).json({ message: "Your file is not valid or added" });
    }

    const { _id, favorites } = req.user;
    const user = req.body;

    const userI = await User.findByIdAndUpdate(
      _id,
      {
        ...req.body,
        avatarURL: req.file.path,
      },
      { new: true }
    );

    const {
      email,
      name,
      birthday,
      phone,
      avatarURL,
      city,
      token,
      createdAt,
      updatedAt,
    } = userI;

    res.status(200).json({
      _id,
      email,
      name,
      birthday,
      phone,
      avatarURL,
      city,
      token,
      favorites,
      createdAt,
      updatedAt,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = { updateUsersInfo };
