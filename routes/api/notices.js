const express = require('express')
const router = express.Router()
const authenticate = require('../../middlewares/authMiddleware');
const {filterNotices,  getNoticeById, removeNotice, addNotice, updateImgNotice, getAllNotices, listNotices, upload} = require('../../controllers/index')

router.get('/', getAllNotices)
router.get('/users', authenticate, listNotices)

router.get('/search', filterNotices)


router.get('/:id', getNoticeById)

router.post('/', authenticate, addNotice)

router.delete('/users/:id', authenticate, removeNotice) 


router.patch('/avatar/:id', authenticate, upload.single("img"), updateImgNotice)


module.exports = router