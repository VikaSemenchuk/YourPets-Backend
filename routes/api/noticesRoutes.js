const express = require("express");
const router = express.Router();
const authenticate = require("../../middlewares/authMiddleware");
const {
  filterNotices,
  getNoticeById,
  removeNotice,
  addNotice,
  updateImgNotice,
  getAllNotices,
  addFavorites,
  removeFavorites,
  getFavorites,
  listNotices,
  upload,
} = require("../../controllers/index");
const { searchNotices } = require("../../controllers/notices/searchNotices");

router.get("/", getAllNotices);
// router.post('/', authenticate,
router.post("/", authenticate, upload.single("file"), updateImgNotice);

router.get("/:id", getNoticeById);
router.get("/users/filter", filterNotices);
router.get("/users/search", searchNotices);

router.get("/user/added", authenticate, listNotices);
router.delete("/user/added/:id", authenticate, removeNotice);

router.get("/user/favorite", authenticate, getFavorites); //це пункт 17????
router.patch("/user/favorite/:id", authenticate, addFavorites);
router.delete("/user/favorite/:id", authenticate, removeFavorites); // це пункт 18???

// router.patch('/avatar/:id', authenticate, upload.single("img"), updateImgNotice)

module.exports = router;
