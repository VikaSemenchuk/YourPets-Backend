const express = require("express");
const router = express.Router();
const authenticate = require("../../middlewares/authMiddleware");
const { upload } = require("../../services/cloudinary");

const {
  getNotices,
  addNotice,
  getNoticeById,
  searchNotices,
  filterNotices,
  noticesAddedByUser,
  removeNotice,
  getFavorites,
  addFavorites,
  removeFavorites,
} = require("../../controllers/notices");

router.get("/", getNotices);
router.post("/", authenticate, upload.single("file"), addNotice);

router.get("/:id", getNoticeById);

router.get("/users/search", searchNotices);
router.get("/users/filter", filterNotices);

router.get("/user/added", authenticate, noticesAddedByUser);
router.delete("/user/added/:id", authenticate, removeNotice);

router.get("/user/favorite", authenticate, getFavorites);
router.patch("/user/favorite/:id", authenticate, addFavorites);
router.delete("/user/favorite/:id", authenticate, removeFavorites);

module.exports = router;
