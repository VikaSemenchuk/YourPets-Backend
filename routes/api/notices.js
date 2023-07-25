const express = require('express')
const router = express.Router()
const {filterNotices, listNotices, getNoticeById, removeNotice, addNotice, updateImgNotice, getAllNotices, upload} = require('../../controllers/index')
const authenticate = require('../../middlewares/authMiddleware');

router.get('/users', authenticate, listNotices)
router.get('/', getAllNotices)

router.get('/search', filterNotices)

router.get('/:id', getNoticeById)

router.post('/', authenticate, addNotice)

router.delete('/users/:id', authenticate, removeNotice) // add /owner


router.patch('/avatar/:id', authenticate, upload.single("img"), updateImgNotice)


module.exports = router