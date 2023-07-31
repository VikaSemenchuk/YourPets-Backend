const User = require("../../models/users/users");
const Notice = require("../../models/notices/notices");

const removeFavorites = async (req, res) => {
    const { id } = req.params;
    try {
      const favNotice = await Notice.findById(id);
      if (!favNotice) {
        return res.status(404).json({ message: "Not found" });
      }
      const newUser = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { favorites: favNotice } },
        { new: true }
      );
      return res.status(200).json(favNotice);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Ooops... ListContacts" });
    }
  };

  module.exports = {
    removeFavorites
  }