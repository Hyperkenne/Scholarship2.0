const express = require('express');

const routes = express.Router();
const addScholarShips = require("../controllers/scholarships/addScholarships");
const deleteScholarShips = require("../controllers/scholarships/deleteScholarships");
const fetchAllScholarShips = require("../controllers/scholarships/fetchAllScholarShips");
const searchScholarShips = require("../controllers/scholarships/searchScholarShips");
const updateScholarShips = require("../controllers/scholarships/updateScholarShips");
const fetchScholarShipById = require("../controllers/scholarships/fetchScholarShipById");

routes
    .post("/addScholarships" , addScholarShips.addScholarShips)
    .post("/deleteScholarships" , deleteScholarShips.deleteScholarShips)
    .post("/fetchAllScholarShips" , fetchAllScholarShips.fetchAllScholarShips)
    .post("/searchScholarShips" , searchScholarShips.searchScholarShips)
    .post("/updateScholarShips" , updateScholarShips.updateScholarShips)
    .post("/detchScholarShipById" , fetchScholarShipById.fetchScholarShipById);
 
exports.route = routes;