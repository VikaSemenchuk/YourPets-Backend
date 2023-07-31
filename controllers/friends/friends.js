const { checkResult } = require("../../helpers");
const { Friend } = require("../../models/friends");

const getAllFriends = async (req, res) => {
  try {
    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;

    const getAllList = await Friend.find({}, "-createdAT -updatedAT", {
      limit,
      skip,
    });

    checkResult(getAllList);
    return res.status(200).json(getAllList);
    
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllFriends,
};
