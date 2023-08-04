const mongoose = require('mongoose');
const { mongooseError } = require('../../middlewares');
  const Schema = mongoose.Schema;

  const friendsSchema = Schema({
     title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    address: String,
    workDays: Array,
    phone: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
})

friendsSchema.post("save", mongooseError)
const Friend = mongoose.model('Friend', friendsSchema);

module.exports = Friend