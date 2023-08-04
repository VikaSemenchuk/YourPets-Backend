const Pet = require("../../models/pets/pets");
const { checkResult } = require("../../helpers");

const addPet = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    if (!req.file) {
      next();
    }

    const item = await Pet.create({
      ...req.body,
      fileURL: req.file.path,
      owner,
    });

    checkResult(item);
    return res.status(201).json({ message: "Pet is added", item });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPet,
};
