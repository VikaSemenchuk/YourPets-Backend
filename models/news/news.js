const mongoose = require('mongoose');
const { mongooseError } = require('../../middlewares');
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

newsSchema.post("save", mongooseError)
const New = mongoose.model('New', newsSchema);

module.exports = New