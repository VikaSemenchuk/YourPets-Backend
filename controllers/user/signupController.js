const bcrypt = require("bcryptjs");
const User = require("../../models/users/users");
const { HttpError } = require("../../helpers");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userI = await User.findOne({ email });

    if (userI) throw HttpError(409, "Email in use")

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ ...req.body, password: hashPassword });

    next();
  } catch (err) {
    next(err)
  }
};

module.exports = {
  signup,
};
