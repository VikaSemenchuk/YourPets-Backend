const { Notice } = require("../../models/notices");

const removeNotice = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const { id } = req.params;
    const match = await Notice.findById(id);

    if (!match) {
      return res.status(404).json({ message: "Not found match" });
    }
    
    if (match.owner.id.toString() !== owner.id.toString()) {
      return res.status(404).json({ message: "You haven't enough rights" });
    }

    const item = await Notice.findByIdAndRemove(id);
    
    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }
    
    return res.status(200).json({ message: "notice deleted", item });
  } catch (err) {
    res.status(400).json({ message: "Ooops..." });
  }
};

module.exports = {
  removeNotice,
};
