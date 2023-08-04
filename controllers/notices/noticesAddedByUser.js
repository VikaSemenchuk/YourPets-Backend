const { Notice } = require("../../models/notices");
const { checkResult } = require("../../helpers");

const noticesAddedByUser = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    let { page = 1, limit = 8 } = req.query;
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;
    let paginationString = { owner };

    const total = await Notice.countDocuments(paginationString);
    const noticesList = await Notice.find(
      paginationString,
      "-createdAT -updatedAT",
      { skip, limit }
    );

    checkResult(noticesList);
    checkResult(total);

    return res.status(200).json({ noticesList, total });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  noticesAddedByUser,
};
