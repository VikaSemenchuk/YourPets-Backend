const { Notice } = require("../../models/notices");
const { checkTitle, pagination, checkResult } = require("../../helpers");

const searchNotices = async (req, res, next) => {
  const { title, category } = req.query;
  try {
    let { page = 1, limit = 8 } = req.query;

    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    let paginationString = { category };
    let noticesList = [];
    let allNotices = [];
    let total = 0;
    let checkTitleResult = [];

    if (category && !title) {
      paginationString = { category };
      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT",
        {
          skip,
          limit,
        }
      ).sort({ createdAt: -1 });
      total = await Notice.countDocuments(paginationString);

    } else if (title && !category) {
      allNotices = await Notice.find({});
      checkTitleResult = checkTitle(allNotices, title);

      total = pagination(checkTitleResult, skip, limit).total;
      noticesList = pagination(checkTitleResult, skip, limit).noticesSlice;

    } else if (category && title) {
      paginationString = { category };
      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT"
      );
      checkTitleResult = checkTitle(noticesList, title);
      noticesList = pagination(checkTitleResult, skip, limit).noticesSlice;
      total = pagination(checkTitleResult, skip, limit).total;

    } else {
      total = await Notice.countDocuments();
      noticesList = await Notice.find({}, "-createdAT -updatedAT", {
        skip,
        limit,
      }).sort({ createdAt: -1 });
    }

    checkResult(noticesList)
    checkResult(total)

    return res.status(200).json({ noticesList, total });
  } catch (err) {
   next(err)
  }
};

module.exports = {
  searchNotices,
};
