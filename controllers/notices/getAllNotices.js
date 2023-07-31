const { Notice } = require("../../models/notices");

const getAllNotices = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    // const skip = (page - 1) * limit;

    // const { page = 1, limit = 4 } = req.query;
    // const skip = (page - 1) * limit;

    const listAllNotices = await Notice.find(
      {},
      "-createdAT -updatedAT"
      , {
       page
      // limit,
      // skip
      }
    ).sort({ createdAt: -1 });
    
    return res.status(200).json(listAllNotices);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllNotices,
};
