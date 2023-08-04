const { Notice } = require("../../models/notices");
const { checkResult } = require("../../helpers");

const getNoticeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await Notice.findById(id);

    checkResult(item)

    return res.status(200).json(item);
  } catch (err) {
   next(err)
  }
};

module.exports = {
  getNoticeById,
};
