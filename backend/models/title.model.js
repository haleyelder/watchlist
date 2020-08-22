const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const titleSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    year: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
})

const Title = mongoose.model('Title', titleSchema)

module.exports = Title