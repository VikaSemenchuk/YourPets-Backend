const bcrypt = require("bcryptjs");
const User = require("../../models/users/users");
const signToken = require("../../helpers/signToken");
const { HttpError } = require("../../helpers");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userI = await User.findOne({ email });

    if (!userI) throw HttpError(401, "Email or password is wrong");

    const passwordIsValid = await bcrypt.compare(password, userI.password);

    if (!passwordIsValid) throw HttpError(401, "Email or password is wrong");

    const payload = {
      id: userI._id,
    };

    const token = await signToken(payload);
    const { name, birthday, phone, avatarURL, city } = userI;

    await User.findByIdAndUpdate(userI._id, { token });

    return res.status(200).json({
      token,
      user: {
        email,
        name,
        birthday,
        phone,
        avatarURL,
        city,
      },
    });
  } catch (err) {
   next(err)
  }
};

module.exports = {
  login,
};
