const User = require("../../models/users/users");
const Notice = require("../../models/notices/notices");
const { checkResult } = require("../../helpers");

const removeFavorites = async (req, res, next) => {
  try {
      const { id } = req.params;
      const favNotice = await Notice.findById(id);
    
      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { favorites: favNotice } },
        { new: true }
      );

      checkResult(favNotice)
      return res.status(200).json(favNotice);
    } catch (err) {
     next(err)
    }
  };

  module.exports = {
    removeFavorites
  }