const User = require("../../models/users/users");

const getFavorites = async (req, res) => {
  const { _id } = req.user;
  try {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;
    const endIndex = skip + limit;

    const newUser = await User.findById(_id);
    const usersFavNotices = newUser.favorites;

    const total = usersFavNotices.length;
    const favNoticesPag = usersFavNotices.slice(skip, endIndex);

    return res.status(200).json({ favNoticesPag, total });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
  getFavorites,
};
