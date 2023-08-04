const { Notice } = require("../../models/notices");
const { checkResult } = require("../../helpers");

const getAllNotices = async (req, res, next) => {
  try {
    let { page = 1, limit = 8 } = req.query;
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    const total = await Notice.countDocuments({});
    const noticesList = await Notice.find({}, "-createdAT -updatedAT", {
      limit,
      skip,
    }).sort({ createdAt: -1 });

    checkResult(noticesList)
    checkResult(total)

    return res.status(200).json({ noticesList, total });
  } catch (err) {
    next(err)
  }
};

module.exports = {
  getAllNotices,
};
