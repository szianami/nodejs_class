const { Schema } = require('mongoose');
const db = require('../config/db');

const Task = db.model('Task', {
    name: String,
    description: String,
    deadline: Date,
    status: String,
    _addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _assignee: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Task;