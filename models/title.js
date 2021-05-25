const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({ 
  title: {type: String},
  year: {type: Number},
  type: {type: String},
  genre: {type: String},
  seasons: {type: Number},
  dateAdded: {type: Date},
  dateCompleted: {type: Date}

});

module.exports = mongoose.model('Title', titleSchema); 