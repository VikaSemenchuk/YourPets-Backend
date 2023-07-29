const fs = require("fs/promises");
const path = require("path");

const friendsPath = path.resolve("models", "friends", "sponsors.json");

const listFriends = async () => {
    try {
      const data = await fs.readFile(friendsPath);
    //   console.log('data :>> ', data);
      return (friends = JSON.parse(data));
  
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports = {listFriends}

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const friendsSchema = mongoose.Schema({
     title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    address: String,
    workDays: Array,
    phone: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
})

const Friend = mongoose.model('Friend', friendsSchema);

module.exports = Friend