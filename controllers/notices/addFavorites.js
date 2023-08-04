const Notice = require("../../models/notices/notices");
const User = require("../../models/users/users");
const { checkResult, HttpError } = require("../../helpers");

const addFavorites = async (req, res, next) => {
  const { id } = req.params;
  try {
    const favNotice = await Notice.findById(id);
    const usersInfo = await User.findById(req.user._id);
    const usersFavorite = usersInfo.favorites;

    for (const item of usersFavorite) {
      if (item._id.toString() === id) throw HttpError(404, "Already added");
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { favorites: favNotice } },
      { new: true }
    );

    checkResult(favNotice);
    return res.status(200).json(favNotice);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addFavorites,
};
