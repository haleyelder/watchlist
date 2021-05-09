const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({ 
  title: {type: String},
  year: {type: String}
});

module.exports = mongoose.model('Title', titleSchema); 