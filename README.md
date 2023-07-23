# yourPets-backend

##nodemon.json ("ignore": ["node_modules", ??? "models/contacts.json"])

##роути для юзерів addFavorite i removeFavorite?????????


{
router.patch('/:id', authenticate, addFavorites);
router.delete('/:id', authenticate, removeFavorites);
router.get('/favorites', authenticate, getFavorites);
router.patch('/', authenticate, changeUserData);
router.patch('/avatars', authenticate, upload.single("avatar"), changeAvatarImg);
} . ???????