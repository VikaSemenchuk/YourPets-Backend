const { Notice } = require("../../models/notices");
const { checkResult } = require("../../helpers");

const addNotice = async (req, res, next) => {
  const { _id: owner, email: ownerEmail, phone: ownerPhone } = req.user;

  try {
    if (!req.file) {
      next();
    }

    const noticeUpdate = await Notice.create({
      ...req.body,
      fileURL: req.file.path,
      owner,
      ownerEmail,
      ownerEmail,
    });

    checkResult(noticeUpdate);
    res.status(201).json(noticeUpdate);
  } catch (err) {
    res.status(500).json({ message: "Ooops... Something brakes in Avatar" });
  }
};

module.exports = {
  addNotice,
};
