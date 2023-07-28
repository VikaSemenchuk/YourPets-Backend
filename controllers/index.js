const {  login } = require('./auth/loginController');
const {  logout } = require('./auth/logoutControler');
const { signup } = require('./auth/signupController');
const { getCurrent, changeUserData } = require('./users/usersControllers');
const { listNotices} = require('./notices/listNotices');
const { getNoticeById } = require('./notices/getNotice');
const { removeNotice } = require('./notices/removeNotice');
const { addNotice } = require('./notices/addNotice');
const { getAllNotices } = require('./notices/getAllNotices');
const { filterNotices } = require('./notices/filterNotices');
const { updateImgNotice } = require('./notices/updateImgNotice');
const { changeAvatarImg, upload, storage } = require('./users/changeAvatarImg');
const { addFavorites, removeFavorites, getFavorites} = require('./users/updateFavorites')
const { listPets, addPet,addPetImg, removePet } = require('./pets/petsControllers')
const { getAllFriends } = require('./friends/friends')
const { getAllNews } = require('./news/news')



module.exports = {
    signup, login, logout,
    getCurrent, changeUserData,
    listNotices, getNoticeById, removeNotice, addNotice, updateImgNotice, changeAvatarImg, getAllNotices,
    listPets, addPet, addPetImg, removePet, filterNotices, addFavorites, removeFavorites, getFavorites, upload, storage, getAllFriends, getAllNews
}
