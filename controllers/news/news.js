const { New } = require("../../models/news");
const { checkResult, pagination, checkTitle } = require("../../helpers");

const getAllNews = async (req, res, next) => {
  try {
    let { page = 1, limit = 9, title } = req.query;
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    let newsList = [];
    let total = 0;

    if (title === undefined) {
      total = await New.countDocuments({});
      newsList = await New.find({}, "-createdAT -updatedAT", {
        limit,
        skip,
      }).sort({ date: -1 });
    }

    if (title) {
      const allNotices = await New.find({});
      const checkTitleResult = checkTitle(allNotices, title);

      newsList = pagination(checkTitleResult, skip, limit).noticesSlice;
      total = pagination(checkTitleResult, skip, limit).total;
    }

    checkResult(newsList);
    checkResult(total);

    return res.status(200).json({ newsList, total });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNews,
};
