const fs = require("fs/promises");
const path = require("path");

const newsPath = path.resolve("models", "news", "allArticles.json");

const listNews = async () => {
    try {
      const data = await fs.readFile(newsPath);
    //   console.log('data :>> ', data);
      return (news = JSON.parse(data));
  
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports = {listNews}