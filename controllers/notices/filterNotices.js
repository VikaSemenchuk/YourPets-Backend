const { Notice } = require("../../models/notices");
const {filterNoticesByAge }= require('../../helpers/index')

const filterNotices = async (req, res) => {
  const { sex, date } = req.query;
  try {
    const { page = 1, limit = 40 } = req.query;
    const skip = (page - 1) * limit;
    const endIndex = skip + limit;
    let paginationString = {};
 
    sex ? (paginationString = { sex }) : ( paginationString = {});
    
    const noticesListForFilter = await Notice.find(
      paginationString,
      "-createdAT -updatedAT"
    );

    
    const filteredNoticesList = filterNoticesByAge(noticesListForFilter, date).newList
    const total = filterNoticesByAge(noticesListForFilter, date).total

    const noticesList = filteredNoticesList.slice(skip, endIndex)

    return res.status(200).json({noticesList, total});
  } catch (err) {
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
    filterNotices,
};
