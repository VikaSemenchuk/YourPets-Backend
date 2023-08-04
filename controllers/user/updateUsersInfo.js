const User = require("../../models/users/users");
const { HttpError } = require("../../helpers");

const updateUsersInfo = async (req, res, next) => {
  try {
    if (!req.file) throw HttpError(500, "Your file is not valid or added");

    const { _id, favorites } = req.user;

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
    next(err);
  }
};

module.exports = { updateUsersInfo };
