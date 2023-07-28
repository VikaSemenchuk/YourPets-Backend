const express = require('express')
const router = express.Router()
const {listPets, addPet, addPetImg, removePet, upload} = require('../../controllers/index')
const authenticate = require('../../middlewares/authMiddleware');

router.get('/', authenticate, listPets)

router.post('/', authenticate, upload.single("img"), addPet)

router.delete('/:id', authenticate, removePet)

// router.patch('/avatar/:id', authenticate, upload.single("img"), addPetImg)

module.exports = router