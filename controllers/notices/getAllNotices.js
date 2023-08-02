const { Notice } = require("../../models/notices");

const getAllNotices = async (req, res) => {
  try {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;

    const noticesList = await Notice.find(
      {},
      "-createdAT -updatedAT", {
      limit,
      skip
      }
    ).sort({ createdAt: -1 });

    // const totalList = await Notice.find({});
    const total = await Notice.countDocuments({});

    return res.status(200).json({noticesList, total});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllNotices,
};
