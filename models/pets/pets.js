const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for pet'],
    },
    date: {
      type: Date,
      required: [true, 'Birthday date of pet'],
    },
    type: {
      type: String,
      required: [true, 'Set type for pet'], 
    },
    comments: {
      type: String,
      default:''
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    fileURL:
      { type: String }
  },
    {
      timestamps: true,
      versionKey: false
  }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
