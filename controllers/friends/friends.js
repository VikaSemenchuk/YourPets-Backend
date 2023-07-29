const { checkResult } = require("../../helpers");
const friends = require("../../models/friends/friends");
const Friend = require("../../models/friends/friends")

const getAllFriends = async (req, res) => {
   try {
    const getAllList = await Friend.find()
    console.log('getAllFriends :>> ', getAllList);

    checkResult(getAllList)
    return res.status(200).json(getAllList)
   } catch (error) {
    res.status(500).json(error.message)
   }
    // const result = await friends.listFriends();
    // console.log('result :>> ', result);
    // res.json(result);
  };

  module.exports = {
    getAllFriends
  }