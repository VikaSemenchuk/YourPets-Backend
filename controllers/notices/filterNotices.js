const { Notice } = require("../../models/notices");
const {filterNoticesByAge }= require('../../helpers/index')

const filterNotices = async (req, res) => {
  const { sex, date } = req.query;
  try {
    const { page = 1, limit = 40 } = req.query;
    const skip = (page - 1) * limit;
    let paginationString = {};
 
    sex ? (paginationString = { sex }) : ( paginationString = {});
    
    const noticesList = await Notice.find(
      paginationString,
      "-createdAT -updatedAT",
      { skip, limit }
    );
    const filteredNoticesList = filterNoticesByAge(noticesList, date)
    // console.log(date, noticesList)

    return res.status(200).json(filteredNoticesList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
    filterNotices,
};
