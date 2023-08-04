const User = require("../../models/users/users");
const { HttpError } = require("../../helpers");

const getCurrent = async (req, res, next) => {
  try {
    const { email, favorites } = req.user;
    const userI = await User.findOne({ email });

    if (!userI) throw HttpError(401, "Email or password is wrong");

    const {
      _id,
      name,
      birthday,
      phone,
      avatarURL,
      city,
      token,
      createdAt,
      updatedAt,
    } = userI;

    return res.status(200).json({
      userI: {
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
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCurrent,
};
