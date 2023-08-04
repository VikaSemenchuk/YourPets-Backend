const bcrypt = require("bcryptjs");
const User = require("../../models/users/users");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userI = await User.findOne({ email });

    if (userI) {
      return res.status(409).json({
        message: "Email in use",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ ...req.body, password: hashPassword });

    next();
  } catch (err) {
    res.status(500).json({ message: `Ooops... ${err.message}` });
  }
};

module.exports = {
  signup,
};
