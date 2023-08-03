const { New } = require("../../models/news");
const { checkTitle, checkTitle2 } = require("../../helpers/checkTitle");

const newsSearch = async (req, res) => {
  const { title } = req.query;
  console.log('title :>> ', title);
  try {
    if (!title) return res.status(400).json({ message: "Bed request" });

    let { page = 1, limit= 9 } = req.query;
    page = +page;
    limit = +limit
    const skip = (page - 1) * limit;


    const allNotices = await New.find({});

    const newsList = checkTitle2(allNotices, title, skip, limit).noticesSlice;
    const total = checkTitle2(allNotices, title, skip, limit).total;

    return res.status(200).json({ newsList, total });
  } catch (error) {
    res.status(500).json({ message: "Ooops... news, " });
  }
};

module.exports = {
  newsSearch,
};
