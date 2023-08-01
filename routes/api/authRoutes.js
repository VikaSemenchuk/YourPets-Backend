const express = require("express");
const router = express.Router();

const authenticate = require("../../middlewares/authMiddleware");
const { upload } = require("../../services/cloudinary");
const {
  signup,
  login,
  logout,
  getCurrent,
  updateUsersInfo,
} = require("../../controllers/user");

router.post("/register", signup, login);
router.post("/login", login);
router.post("/logout", authenticate, logout);

router.get("/current", authenticate, getCurrent);
router.patch(
  "/update/avatar",
  authenticate,
  upload.single("avatar"),
  updateUsersInfo
);

module.exports = router;
