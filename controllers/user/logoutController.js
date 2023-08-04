const User = require("../../models/users/users");

const logout = async (req, res, next) => {
  try {
    const { id } = req.user;

    await User.findByIdAndUpdate(id, { token: null });

    return res.status(204).json({ message: "Logout success" });
  } catch (err) {
   next()
  }
};

module.exports = {
  logout,
};
