const User = require("../../models/users/users");

const updateUsersInfo = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(500).json({ message: "Your file is not valid or added" });
    }

    const { _id } = req.user;
    console.log("req.body :>> ", req.body);
    const userI = await User.findByIdAndUpdate(
      _id,
      {
        email: userI.email,
        name: userI.name,
        birthday: userI.birthday,
        phone: userI.phone,
        avatarURL: userI.avatarURL,
        city: userI.city,
        avatarURL: req.file.path,
        favorites: userI.favorites
      },
      { new: true }
    );
    res.status(200).json(userI);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = { updateUsersInfo };
