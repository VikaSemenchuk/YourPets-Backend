const express = require("express");
const router = express.Router();

const authenticate = require("../../middlewares/authMiddleware");
const { listPets, addPet, removePet } = require("../../controllers/pets");
const { upload } = require("../../services/cloudinary");

router.get("/", authenticate, listPets);
router.post("/", authenticate, upload.single("file"), addPet);
router.delete("/:id", authenticate, removePet);

module.exports = router;
