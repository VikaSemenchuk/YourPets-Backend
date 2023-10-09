const { Notice } = require("../../models/notices");
const { filterOnDate } = require("../../helpers");

const getAllNotices = async (req, res, next) => {
  try {
    const { title, category, sex, date } = req.query;
    let { page = 1, limit = 8 } = req.query;

    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    const pipeline = [];
    const $match = {};

    if (category) {
      $match["category"] = category;
    }

    if (title) {
      const searchRegex = new RegExp([...title].join(".*"), "i");
      $match["$or"] = [{ title: searchRegex }, { type: searchRegex }];
      // $match["title"] = {$regex: searchRegex};
    }

    if (sex) {
      $match["sex"] = sex;
    }

    if (date) filterOnDate(date, $match);

    const total = await Notice.countDocuments($match);
    if (!total) return res.status(200).json({ noticesList: [], total });

    pipeline.push(
      { $match },
      { $skip: skip },
      { $limit: limit },
      { $sort: { createdAt: -1 } }
    );

    const noticesList = await Notice.aggregate(pipeline);

    return res.status(200).json({ noticesList, total });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllNotices,
};
