const { checkResult } = require("../../helpers");
const { checkTitle2 } = require("../../helpers/checkTitle");
const { New } = require("../../models/news");

const getAllNews = async (req, res) => {
  try {
    let { page = 1, limit = 9, title } = req.query;
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    let newsList = [];
    let total = 0;

    if (title === undefined) {
      newsList = await New.find({}, "-createdAT -updatedAT", {
        limit,
        skip,
      }).sort({ date: -1 });

      checkResult(newsList);

      total = await New.countDocuments({});
    }

    if (title) {
      const allNotices = await New.find({});

      newsList = checkTitle2(allNotices, title, skip, limit).noticesSlice;
      total = checkTitle2(allNotices, title, skip, limit).total;
    }

    return res.status(200).json({ newsList, total });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllNews,
};
