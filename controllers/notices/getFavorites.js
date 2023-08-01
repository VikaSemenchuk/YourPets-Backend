const User = require("../../models/users/users");

const getFavorites = async (req, res) => {
    const { _id } = req.user;
    try {
      const newUser = await User.findById(_id);

      const usersFavNotices = newUser.favorites
  
      const total = usersFavNotices.length
      console.log('total :>> ', total);

      
      // console.log('newUser.favorites :>> ', newUser.favorites);
  
      return res.status(200).json({usersFavNotices, total});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Ooops... ListContacts" });
    }
  };

  module.exports = {
    getFavorites
  }