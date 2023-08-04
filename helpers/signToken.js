const jwt = require('jsonwebtoken');

const signToken = async ({ id }) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "23h" })
}

module.exports = signToken;