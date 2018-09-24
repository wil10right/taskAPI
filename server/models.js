const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: ""
    },
    completed:boolean=false
},{timestamps:true});//adds createdAt and updatedAt

mongoose.connect('mongodb://localhost:27017/rtapi',{useNewUrlParser:true}, errs=>console.log(errs))
const Tasks = mongoose.model('task',TaskSchema);

module.exports = Tasks;