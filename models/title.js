const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({ 
  title: {type: String},
  year: {type: Number}
});

module.exports = mongoose.model('Title', titleSchema); 