const User = require("../../models/users/users");

const getCurrent = async (req, res) => {
  try {
    const { email, favorites } = req.user;
    const userI = await User.findOne({ email });

    if (!userI) {
      return res.status(401).json({
        message: "Email or password is wrong",
      });
    }

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
    res.status(500).json({ message: "Ooops... Something wrong in DB" });
  }
};

module.exports = {
  getCurrent,
};
