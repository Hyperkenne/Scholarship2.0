const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title : {type : String},
    description : {type : String},
    links : {type : Array},
    rewardWorth : {type : String},
    deadline : {type : String},
    gradeLevel : {type : String},
    country : {type : String},
    banner : {type : String}
    }
);


module.exports = mongoose.model('scholarship' , scholarshipSchema);