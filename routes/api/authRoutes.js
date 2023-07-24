const express = require('express');
const router = express.Router();
const { signup, login, logout, getCurrent, changeUserData, changeAvatarImg, addFavorites, removeFavorites, getFavorites, upload } = require('../../controllers/index');
const authenticate = require('../../middlewares/authMiddleware');
// const upload = require('../../middlewares/uploadMiddleware');

router.post('/register', signup);//
router.post('/login', login);//
router.post('/logout', authenticate, logout);//
router.get('/current', authenticate, getCurrent);// changed post on get

router.patch('/:id', authenticate, addFavorites);
router.delete('/:id', authenticate, removeFavorites);

router.patch('/favorites/:id', authenticate, addFavorites);
router.delete('/favorites/:id', authenticate, removeFavorites); // це пункт 18???

router.get('/favorites', authenticate, getFavorites); //це пункт 17????
router.put('/update/:id', authenticate, changeUserData); // added update before id?????? 
router.patch('/avatar', authenticate, upload.single("avatar"), changeAvatarImg);// може тут також id треба

module.exports = router 