const { Notice } = require("../../models/notices");

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
      $match["$or"] = [
        { "title": searchRegex },
        { "type": searchRegex },
      ];
      // $match["title"] = searchRegex
    }

    if (sex) {
      $match["sex"] = sex;
    }

    if (date) {
      let startDate;
      let endDate;
      let endDate2;

      const currentDate = new Date();

      if (date === "1") {
        endDate = new Date();
        endDate.setDate(currentDate.getDate() - 365 / 4);
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 365); 
        $match["date"] = {
          $gte: startDate,
          $lt: endDate,
        };
      } else if (date === "2") {
        endDate = new Date();
        endDate.setDate(currentDate.getDate() - 365); 

        $match["date"] = {
          $lte: endDate,
        };
      } else if (date === "3") {
        endDate = new Date();
        endDate.setDate(currentDate.getDate() - 365 * 2);

        $match["date"] = {
          $lte: endDate,
        };
      } else if (date === "4") {
        endDate2 = new Date();
        endDate2.setDate(currentDate.getDate() - 365 * 2);
        endDate = new Date(currentDate);
        endDate.setDate(currentDate.getDate() - 365 / 4);
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 365);

        $match["$or"] = [
          { "date": { $gte: startDate, $lte: endDate } },
          { "date": { $lte: endDate2 } },
        ];
      }
    }

    const total = await Notice.countDocuments($match);
    if (!total) res.status(200).json({ noticesList: [], total });

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
