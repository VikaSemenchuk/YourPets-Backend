const fs = require("fs/promises");
const path = require("path");

const friendsPath = path.resolve("models", "friends", "sponsors.json");

const listFriends = async () => {
    try {
      const data = await fs.readFile(friendsPath);
      console.log('data :>> ', data);
      return (friends = JSON.parse(data));
  
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports = {listFriends}