const { signup } = require("./signupController");
const { login } = require("./loginController");
const { logout } = require("./logoutController");
const { getCurrent } = require("./getCurrent");
const { updateUsersInfo } = require("./updateUsersInfo");

module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateUsersInfo,
};
