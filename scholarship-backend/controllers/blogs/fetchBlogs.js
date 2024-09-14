const blogsSchema = require("../../models/blogsSchema");

const fetchBlogs = async (req , res) => {
    try{
        const blogs = await blogsSchema.find();
        return res.status(200).json(blogs);
    }
    catch(err){
        return res.status(500).json(err);
    }
}


exports.fetchBlogs = fetchBlogs;
