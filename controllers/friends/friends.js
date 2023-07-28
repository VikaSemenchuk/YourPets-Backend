const friends = require("../../models/friends/friends");

const getAllFriends = async (req, res) => {
    const result = await friends.listFriends();
    console.log('result :>> ', result);
    res.json(result);
  };

  module.exports = {
    getAllFriends
  }