const getFavorites = async (req, res, next) => {
  try {
    let { page = 1, limit = 8 } = req.query;
    page = +page
    limit = +limit
    const skip = (page - 1) * limit;
    const endIndex = skip + limit;
    
    const allFavNotices = req.user.favorites;

    const total = allFavNotices.length;
    const noticesList = allFavNotices.slice(skip, endIndex);

    // checkResult(allFavNotices) 
    // checkResult(noticesList)
    // checkResult(total)

    return res.status(200).json({ allFavNotices, noticesList, total });
  } catch (err) {
   next(err)
  }
};

module.exports = {
  getFavorites,
};
