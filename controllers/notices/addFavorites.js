const Notice = require("../../models/notices/notices");
const User = require("../../models/users/users");

const addFavorites = async (req, res) => {
  const { id } = req.params;
  try {
    const favNotice = await Notice.findById(id);
    if (!favNotice) {
      return res.status(404).json({ message: "Not found" });
    }

    const usersInfo = await User.findById(req.user._id);
    const usersFavorite = usersInfo.favorites;

    for (const item of usersFavorite) {
      if (item._id.toString() === id)
        res.status(400).json({ message: "Already added" });
    }

    const newUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { favorites: favNotice } },
      { new: true }
    );
    return res.status(200).json(favNotice);
  } catch (err) {
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
  addFavorites,
};
