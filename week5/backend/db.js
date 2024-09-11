const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://pritikashukla21:jiya@24@cluster0.l4tvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo', todoSchema)
module.exports={
    todo
}