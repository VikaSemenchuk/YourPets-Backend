const { Notice } = require("../../models/notices");
const { checkResult, HttpError } = require("../../helpers");

const removeNotice = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const match = await Notice.findById(id);

    if (!match) {
      throw HttpError(404, "Not found match");
    }

    if (match.owner.id.toString() !== owner.id.toString()) {
      throw HttpError(404, "You haven't enough rights");
    }

    const item = await Notice.findByIdAndRemove(id);

    checkResult(item);
    return res.status(200).json({ message: "notice deleted", item });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  removeNotice,
};
