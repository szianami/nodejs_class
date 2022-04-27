const { Schema } = require('mongoose');
const db = require('../config/db');

const User = db.model('Task', {
    username: String,
    crew: String,
    profilePicUrl: String
});

module.exports = User;