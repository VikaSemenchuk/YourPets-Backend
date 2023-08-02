const { checkResult } = require("../../helpers");
const { New } = require("../../models/news");

const getAllNews = async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    const skip = (page - 1) * limit;

    const newsList = await New.find({}, "-createdAT -updatedAT", {
      limit,
      skip,
    }).sort({ date: -1 });

    checkResult(newsList);

    const total = await New.countDocuments({})

    return res.status(200).json({newsList, total});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllNews,
};


