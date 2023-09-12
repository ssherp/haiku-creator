const mongoose = require('mongoose');

const { Schema } = mongoose;

const haikuSchema = new Schema({
  haikuText: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
  }
});

const Haiku = mongoose.model('Haiku', haikuSchema);

module.exports = Haiku;


