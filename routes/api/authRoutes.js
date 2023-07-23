const express = require('express');
const router = express.Router();
const { signup, login, logout, getCurrent, changeUserData, changeAvatarImg, addFavorites, removeFavorites, getFavorites, upload } = require('../../controllers/index');
const authenticate = require('../../middlewares/authMiddleware');
// const upload = require('../../middlewares/uploadMiddleware');

router.post('/register', signup);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.post('/current', authenticate, getCurrent);
<<<<<<< Updated upstream
router.patch('/:id', authenticate, addFavorites);
router.delete('/:id', authenticate, removeFavorites);
=======
router.patch('/favorites/:id', authenticate, addFavorites);
router.delete('/favorites/:id', authenticate, removeFavorites);
>>>>>>> Stashed changes
router.get('/favorites', authenticate, getFavorites);
router.patch('/', authenticate, changeUserData);
router.patch('/avatar', authenticate, upload.single("avatar"), changeAvatarImg);

module.exports = router 