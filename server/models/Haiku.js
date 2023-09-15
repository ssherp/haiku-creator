const { Schema, model } = require('mongoose');


const haikuSchema = new Schema({
  line1: {
    type: String,
    required: true,
    trim: true
  },
  line2: {
    type: String,
    required: true,
    trim: true
  },
  line3: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Haiku =model('Haiku', haikuSchema);

module.exports = Haiku;


