const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correct: String,
  level: String,
});

module.exports = mongoose.model('Question', questionSchema);
