// model name should be singular and collection name should be plural
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //if any variable name is in capital that means it as constructor fn or class
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: 'customer'},

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);