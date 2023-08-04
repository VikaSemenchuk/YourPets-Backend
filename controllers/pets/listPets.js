const Pet = require("../../models/pets/pets");
const { checkResult } = require("../../helpers");

const listPets = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    let { page = 1, limit = 8 } = req.query;
    page = +page
    limit = +limit
    const skip = (page - 1) * limit;
    const paginationString = { owner };

    const petsList = await Pet.find(paginationString, "-createdAT -updatedAT", {
      skip,
      limit,
    });

    checkResult(petsList)

    return res.status(200).json(petsList);
  } catch (err) {
    next(err)
  }
};

module.exports = {
  listPets,
};
