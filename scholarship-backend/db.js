const mongoose = require('mongoose');
const url = require("./secretKeys").mongooseAPI;

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to the database');
    } catch (err) {
        console.log('Error connecting to the database', err);
    }
};

exports.connect = connect;