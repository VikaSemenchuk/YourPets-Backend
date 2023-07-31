const { Notice } = require("../../models/notices");

const getAllNotices = async (req, res) => {
  try {
    // const { page = 1 } = req.query;
    // const skip = (page - 1) * limit;

    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;

    const listAllNotices = await Notice.find(
      {},
      "-createdAT -updatedAT", {
      limit,
      skip
      }
    ).sort({ createdAt: -1 });

    const totalList = await Notice.find({});
    const total = totalList.length - 1;

    return res.status(200).json({listAllNotices, total});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllNotices,
};
