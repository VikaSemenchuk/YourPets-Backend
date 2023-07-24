const jwt = require('jsonwebtoken');

const signToken = async ({ id }) => {
    // console.log('process.env.JWT_EXPIRES_IN :>> ', process.env.JWT_EXPIRES_IN);
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "23h" })
}

module.exports = signToken;