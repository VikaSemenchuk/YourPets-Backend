const { Notice } = require("../../models/notices");

const noticesAddedByUser = async (req, res) => {
  const { _id: owner } = req.user;
  let paginationString = { owner };

  try {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;

   const noticesList = await Notice.find(
      paginationString,
      "-createdAT -updatedAT",
      { skip, limit }
    );

    const total = await Notice.countDocuments(paginationString)

    return res.status(200).json({noticesList, total});
  } catch (err) {
    res.status(500).json({ message: `Ooops... ${err.message}` });
  }
};

module.exports = {
    noticesAddedByUser
};
