const HttpError  = require("./HttpError");

const checkResult = result => {
    if (!result) {
        throw HttpError(404, "Not found");
      }
}

module.exports = checkResult;
