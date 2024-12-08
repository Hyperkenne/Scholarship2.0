const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    firstName: {type : String},
    lastName : {type : String},
    username : {type : String},
    countryOfResidence : {type : String},
    countryOfStudy : {type : String},
    email : {type : String},
    password : {type : String},
    role : {type : String},
    profilePic : {type : String}
});

module.exports = mongoose.model('users' , usersSchema);