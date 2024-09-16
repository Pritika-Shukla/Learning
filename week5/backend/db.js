const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://pritikashukla21:jiyashukla@cluster0.9p7pm.mongodb.net/")
const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos', todoSchema)
module.exports={
    todo
}                                

