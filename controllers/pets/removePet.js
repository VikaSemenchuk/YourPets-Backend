const Pet = require("../../models/pets/pets");
const { checkResult } = require("../../helpers");

const removePet = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const item = await Pet.findByIdAndRemove(id, owner);

    checkResult(item);

    return res.status(200).json({ message: "pet deleted", item });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  removePet,
};
