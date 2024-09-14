const blogsSchema = require("../../models/blogsSchema");

const updateBlogs = async (req,  res) =>{
    try{
        const blog = await blogsSchema.findByIdAndUpdate(req.query.id, req.body, {new: true});
        if(!blog){
            return res.status(404).send();
        }
        await blog.save();
        return res.status(200).json(blog);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);

    }
}

exports.updateBlogs = updateBlogs;