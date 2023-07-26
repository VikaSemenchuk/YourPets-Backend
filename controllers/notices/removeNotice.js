const fs = require('fs/promises');
const Notice = require('../../models/notices/notices');

const removeNotice = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const item = await Notice.findByIdAndRemove(id);
    const NoticesList = await Notice.find({owner});
    if (!item) {
      return res.status(404).json({ "message": "Not found" })
    }
    return res.status(204).json({ "message": "No content"});
    } catch (err) {
        res.status(400).json({ message: 'Ooops...'})
    }
}

module.exports = {
    removeNotice
}