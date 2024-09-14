const blogsSchema = require("../../models/blogsSchema");

const searchBlogs = async ( req , res) =>{
    try{
        const filter = req.body.filter;
        const blogs = await blogsSchema.find({
            $or : [
            {title: {"$regex": filter, $options: 'i'}},
            {description : {"$regex": filter, "$options": "i"}},
            {date : {"$regex": filter, "$options": "i"}},
        ]});
        return res.status(200).json(blogs);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

exports.searchBlogs = searchBlogs;
