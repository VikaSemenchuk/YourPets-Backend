const mongoose = require('mongoose');
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

const Friend = mongoose.model('Friend', friendsSchema);

module.exports = Friend