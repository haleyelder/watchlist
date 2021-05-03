const mongoose = require('mongoose')

const titleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    }, 
    year: {type: Number},
    type: {
        type: String,
        required: [true, 'title type is required']
    },
    genre: {type: String},
    dateAdded: {type: Date},
    dateCompleted: {type: Date}

})

module.exports = mongoose.model('Title', titleSchema); 