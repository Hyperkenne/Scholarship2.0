const blogsSchema = require("../../models/blogsSchema");

const addBlogs = async (req ,res) => {
    try {
        const blog = await blogsSchema.create(req.body);
        await blog.save();
        return res.status(201).json(blog);
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
}

exports.addBlogs = addBlogs;