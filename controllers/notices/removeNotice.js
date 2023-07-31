const fs = require('fs/promises');
const Notice = require('../../models/notices/notices');

const removeNotice = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const match = await Notice.findById(id)
    if (!match){
      return res.status(404).json({ "message": "Not found match" })
    }
    console.log(match.owner.id.toString() === owner.id.toString())
    if (match.owner.id.toString() !== owner.id.toString()) {
      return res.status(404).json({ "message": "You haven't enough rights" })
    }
    const item = await Notice.findByIdAndRemove(id);
    console.log('item :>> ', item);
    const NoticesList = await Notice.find({owner});
    if (!item) {
      return res.status(404).json({ "message": "Not found" })
    }
    return res.status(200).json({ "message": "notice deleted", item });
    } catch (err) {
        res.status(400).json({ message: 'Ooops...'})
    }
}

module.exports = {
    removeNotice
}