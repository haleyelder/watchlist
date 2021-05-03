const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    }
})

module.exports = mongoose.model('User', userSchema); 