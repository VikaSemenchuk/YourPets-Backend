const validateBody = require('./validateBody')
const authenticate = require('./authMiddleware')
const upload = require('./uploadMiddleware')

module.exports = {
    validateBody,
    authenticate,
    upload
}