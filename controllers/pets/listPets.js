const Pet = require("../../models/pets/pets");

const listPets = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;
    const paginationString = { owner };
    // !favorite ? paginationString = {owner} : paginationString = { owner , favorite };

    const petsList = await Pet.find(paginationString, "-createdAT -updatedAT", {
      skip,
      limit,
    });

    return res.status(200).json(petsList);
  } catch (err) {
    res.status(500).json({ message: "Ooops... ListPets" });
  }
};

module.exports = {
  listPets,
};
