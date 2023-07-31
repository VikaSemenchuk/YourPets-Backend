const User = require("../../models/users/users");

const getFavorites = async (req, res) => {
    const { id } = req.user;
    try {
      const newUser = await User.findById(req.user._id);
  
      // console.log('newUser.favorites :>> ', newUser.favorites);
  
      return res.status(200).json(newUser.favorites);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Ooops... ListContacts" });
    }
  };

  module.exports = {
    getFavorites
  }