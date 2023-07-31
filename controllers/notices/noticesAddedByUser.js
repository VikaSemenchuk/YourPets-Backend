const { Notice } = require("../../models/notices");

const noticesAddedByUser = async (req, res) => {
  const { _id: owner } = req.user;
  let paginationString = { owner };

  console.log("{owner} :>> ", paginationString);

  try {
    const { page = 1, limit = 8 } = req.query;
    const skip = (page - 1) * limit;

    console.log("paginationString :>> ", paginationString);

    // !favorite ? paginationString = {owner} : paginationString = { owner , favorite };
    const noticesList = await Notice.find(
      paginationString,
      "-createdAT -updatedAT",
      { skip, limit }
    );
    return res.status(200).json(noticesList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
    noticesAddedByUser
};
