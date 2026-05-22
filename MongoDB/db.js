const mongoose = require("mongoose");

const Schema = mongoose.Schema;     //mongoose exports a class called schema.
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name: String, 
    email: {type: String, unique: true},   //unique means, you cannot send the same email twice, DB will block this.
    password: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}