const Pet = require("../../models/pets/pets");

const addPet = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    if (!req.file) {
      res.status(500).json({ message: "Your file is not valid or added" });
    }

    const item = await Pet.create({
      ...req.body,
      fileURL: req.file.path,
      owner,
    });

    return res.status(201).json({ message: "Pet is added", item });
  } catch (err) {
    res.status(405).json({ message: "Ooops..." });
  }
};

module.exports = {
  addPet,
};
