const { Notice } = require("../../models/notices");
const { checkResult } = require("../../helpers");

const getAllNotices = async (req, res, next) => {
  try {
    const { title, category, sex, date } = req.query;

    const pipeline = [];
    const $match = {};

    let newList;
  let startDate;
  let endDate;
  let startDate2;
  let endDate2;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    if (category) {
      $match["category"] = category;
    }

    if (title) {
      const searchRegex = new RegExp([...title].join(".*"), "i");
      $match["$or"] = [
        { title: { $regex: searchRegex } },
        { type: { $regex: searchRegex } },
      ];
    }

    if (sex) {
      $match["sex"] = sex;
    }

    if (date) {
      switch (date) {
        case "1":
    // const rightDate = date.split("-").reverse().join("-");

          diff = new Date() - millisecondsInYear
          startDate = new Date(diff)
          // console.log('startDate :>> ', startDate);
          endDate = new Date()
          // console.log('endDate :>> ', endDate);
      // return {startDate, endDate}

          break;
        case "2":

        default:
          break;
      }
      // return {startDate, endDate}
      $match["date"] = {
        $gte: startDate,
        $lte: endDate,
      };
      console.log('startDate :>> ', startDate);
    }
    console.log('endDate :>> ', endDate);

    pipeline.push({ $match });

    const noticesList = await Notice.aggregate(pipeline);

    // let { page = 1, limit = 8 } = req.query;
    // page = +page;
    // limit = +limit;
    // const skip = (page - 1) * limit;

    // const total = await Notice.countDocuments({});
    // const noticesList = await Notice.find({}, "-createdAT -updatedAT", {
    //   limit,
    //   skip,
    // }).sort({ createdAt: -1 });

    // checkResult(noticesList)
    // checkResult(total)

    return res.status(200).json({ noticesList /*, total*/ });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllNotices,
};
