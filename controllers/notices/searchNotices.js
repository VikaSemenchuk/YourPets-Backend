const { Notice } = require("../../models/notices");
const checkTitle = require("../../helpers/checkTitle");

const searchNotices = async (req, res) => {
  const { title, category } = req.query;
  try {
    // const { page = 1, limit = 4 } = req.query;
    // const skip = (page - 1) * limit;

    let paginationString = { category };
    let noticesList = [];

    if (category && title === undefined) {
      paginationString = { category };
      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT"//,
        // {
        //   skip,
        //   limit,
        // }
      );
    } else if (title && category === undefined) {
      noticesList = await Notice.find({}, "-createdAT -updatedAT"
      // , {
      //   skip,
      //   limit,
      // }
      );

      noticesList = checkTitle(noticesList, title);
    } else if (category && title) {
      paginationString = { category };
      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT"//,
        // {
        //   skip,
        //   limit,
        // }
      );

      noticesList = checkTitle(noticesList, title);
    }

    return res.status(200).json(noticesList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
  searchNotices
};
