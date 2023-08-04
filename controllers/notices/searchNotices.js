const { Notice } = require("../../models/notices");
const { checkTitle } = require("../../helpers/checkTitle");
const User = require("../../models/users/users");

const searchNotices = async (req, res) => {
  const { title, category } = req.query;
  try {
    // const user = await User.

    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;

    let paginationString = { category };
    let noticesList = [];
    let total = 0;

    if (category && title === undefined) {
      paginationString = { category };
      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT",
        {
          skip,
          limit,
        }
      ).sort({ createdAt: -1 });

      total = await Notice.countDocuments(paginationString);
    } else if (title && category === undefined) {
      let allNotices = [];

      allNotices = await Notice.find({});

      noticesList = await Notice.find({}, "-createdAT -updatedAT", {
        skip,
        limit,
      });

      total = checkTitle(allNotices, title, skip, limit).total;
      noticesList = checkTitle(allNotices, title, skip, limit).noticesSlice;
    } else if (category && title) {
      paginationString = { category };

      noticesList = await Notice.find(
        paginationString,
        "-createdAT -updatedAT"
      );

      noticesList = checkTitle(noticesList, title, skip, limit).noticesSlice;
      total = checkTitle(noticesList, title, skip, limit).total;
    }

    return res.status(200).json({ noticesList, total });
  } catch (err) {
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
  searchNotices,
};
