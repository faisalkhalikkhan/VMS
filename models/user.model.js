const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    parentID : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;