const Pet = require("../../models/pets/pets");

const removePet = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const item = await Pet.findByIdAndRemove(id, owner);
    //   const PetsList = await Pet.find({owner});

    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(200).json({ message: "pet deleted", item });
  } catch (err) {
    res.status(400).json({ message: "Ooops..." });
  }
};

module.exports = {
  removePet,
};
