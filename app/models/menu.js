// model name should be singular and collection name should be plural
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //if any variable name is in capital that means it as constructor fn or class
const menuSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
})

module.exports = mongoose.model('Menu', menuSchema);