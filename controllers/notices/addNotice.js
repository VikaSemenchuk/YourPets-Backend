const { Notice } = require("../../models/notices");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;

  try {
    if (!req.file) {
      res.status(500);
    }

    const noticeUpdate = await Notice.create({
      ...req.body,
      fileURL: req.file.path,
      owner,
    });

    res.status(201).json(noticeUpdate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... Something brakes in Avatar" });
  }
};

module.exports = {
  addNotice,
};
