const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true, minlength: 4, trim: true}
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User