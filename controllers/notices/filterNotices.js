const { Notice } = require("../../models/notices");
const { filterNoticesByAge, checkResult } = require("../../helpers/index");

const filterNotices = async (req, res, next) => {
  const { sex, date } = req.query;
  try {
    let { page = 1, limit = 8 } = req.query;

    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;
    const endIndex = skip + limit;
    let paginationString = {};

    sex ? (paginationString = { sex }) : (paginationString = {});

    const noticesListForFilter = await Notice.find(
      paginationString,
      "-createdAT -updatedAT"
    );

    const total = filterNoticesByAge(noticesListForFilter, date).total;
    const filteredNoticesList = filterNoticesByAge(
      noticesListForFilter,
      date
    ).newList;
    
    const noticesList = filteredNoticesList.slice(skip, endIndex);

    // checkResult(noticesList)
    // checkResult(total)

    return res.status(200).json({ noticesList, total });
  } catch (err) {
    next(err)
  }
};

module.exports = {
  filterNotices,
};
