const express = require("express");
const routes = express.Router();

const addBlogs = require("../controllers/blogs/addBlogs");
const deleteBlogs = require("../controllers/blogs/deleteBlogs");
const fetchBlogs = require("../controllers/blogs/fetchBlogs");
const updateBlogs = require("../controllers/blogs/updateBlogs");
const searchBlogs = require("../controllers/blogs/searchBlogs");
const fetchBlogsById = require("../controllers/blogs/fetchBlogsById");

routes
    .post("/addBlogs" , addBlogs.addBlogs)
    .post("/deleteBlogs" , deleteBlogs.deleteBlogs)
    .post("/fetchBlogs" , fetchBlogs.fetchBlogs)
    .post("/updateBlogs" , updateBlogs.updateBlogs)
    .post("/searchBlogs" , searchBlogs.searchBlogs)
    .post("/fetchBlogById" , fetchBlogsById.fetchBlogsById);

exports.route = routes;