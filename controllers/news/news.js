const news = require("../../models/news/news");

const getAllNews = async (req, res) => {
    const result = await news.listNews();
    // console.log('result :>> ', result);
    res.json(result);
  };

  module.exports = {
    getAllNews
  }