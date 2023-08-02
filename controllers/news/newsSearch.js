const { New } = require("../../models/news");
const { checkTitle } = require("../../helpers/checkTitle");

const newsSearch = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) return res.status(400).json({ message: "Bed request" });

    let newsList = [];

    newsList = await New.find({}, "-createdAT -updatedAT").sort({ date: -1 });

    newsList = checkTitle(newsList, title);

    return res.status(200).json(newsList);
  } catch (error) {
    res.status(500).json({ message: "Ooops... news, " });
  }
};

module.exports = {
  newsSearch,
};
