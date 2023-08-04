const { Friend } = require("../../models/friends");
const { checkResult } = require("../../helpers");

const getAllFriends = async (req, res, next) => {
  try {
    let { page = 1, limit = 12 } = req.query;
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    const getAllList = await Friend.find({}, "-createdAT -updatedAT", {
      limit,
      skip,
    });

    checkResult(getAllList);
    return res.status(200).json(getAllList);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFriends,
};
