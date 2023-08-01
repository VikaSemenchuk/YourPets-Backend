const { checkResult } = require("../../helpers");
const { New } = require("../../models/news");

const getAllNews = async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    const skip = (page - 1) * limit;

    const getAllList = await New.find({}, "-createdAT -updatedAT", {
      limit,
      skip,
    }).sort({ date: -1 });

    checkResult(getAllList);

    const total = await New.countDocuments({})

    return res.status(200).json({getAllList, total});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllNews,
};
