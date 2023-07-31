const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const newsSchema = Schema({
     title: String,
    url: String,
    text: String,
    imageUrl: String,
    date: String
  },
  {
    timestamps: true,
    versionKey: false
})

const New = mongoose.model('New', newsSchema);

module.exports = New