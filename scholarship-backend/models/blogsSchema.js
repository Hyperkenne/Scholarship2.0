const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
    title : {type : String},
    description : {type : String},
    banner : {type : String},
    video : {type : String},
    links : {type : Array}
});

module.exports = mongoose.model('blog' , blogsSchema);