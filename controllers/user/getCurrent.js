const User = require("../../models/users/users");

const getCurrent = async (req, res) => {
  try {
    const { email } = req.user;
    const userI = await User.findOne({ email });
    if (!userI) {
      return res.status(401).json({
        message: "Email or password is wrong",
      });
    }
    return res.status(200).json({
      userI: {
        _id: userI._id,
        email: userI.email,
        name: userI.name,
        birthday: userI.birthday,
        phone: userI.phone,
        avatarURL: userI.avatarURL,
        city: userI.city,
        token: userI.token,
        avatarURL: userI.avatarURL,
        favorites: req.user.favorites,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Ooops... Something wrong in DB" });
  }
};

module.exports = {
  getCurrent,
};
