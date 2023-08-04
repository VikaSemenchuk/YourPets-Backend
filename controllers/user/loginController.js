const bcrypt = require("bcryptjs");
const signToken = require("../../helpers/signToken");
const User = require("../../models/users/users");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userI = await User.findOne({ email });

    if (!userI) {
      return res.status(401).json({
        message: "Email or password is wrong",
      });
    }
    const passwordIsValid = await bcrypt.compare(password, userI.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Email or password is wrong",
      });
    }
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
    return res.status(500).json({ message: `Ooops... ${err.message}` });
  }
};

module.exports = {
  login,
};
