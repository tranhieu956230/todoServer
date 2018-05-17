const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
var todoSchema = new Schema({
    todo:String,
    completed: {
        type: Boolean,
        default: false,
    }
})

var todoModel = mongoose.model('todo',todoSchema);

module.exports = todoModel;