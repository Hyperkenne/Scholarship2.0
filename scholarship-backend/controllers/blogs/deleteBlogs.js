const blogsSchema = require("../../models/blogsSchema");

const deleteBlogs = async (req, res) => {
    try {
        const blog = await blogsSchema.findByIdAndDelete(req.body.id);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteBlogs = deleteBlogs;