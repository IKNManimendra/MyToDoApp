const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskdetails = new Schema({
    Date: {
        type: String
    },
    Body: {
        type: String
    }
}, {
    collection: 'ClusterTodo'
});

module.exports = mongoose.model('taskdetails', taskdetails);