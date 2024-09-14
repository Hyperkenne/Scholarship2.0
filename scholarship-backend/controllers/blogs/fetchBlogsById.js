const blogsSchema = require("../../models/blogsSchema");

const fetchBlogsById = async (req, res) => {
    try{
        const blog = await blogsSchema.findById(req.body.blogId);

        if(!blog){
            return res.status(404).send("Blog not found");
        }
        res.status(200).json(blog);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

exports.fetchBlogsById = fetchBlogsById;
