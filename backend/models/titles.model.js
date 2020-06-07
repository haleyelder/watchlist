const mongoose = require('mongoose')

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"]
  }, 
  year: {
    type: Number,
    required: [true, "year cannot be blank"]
  }
})

module.exports = mongoose.model('Title', titleSchema)