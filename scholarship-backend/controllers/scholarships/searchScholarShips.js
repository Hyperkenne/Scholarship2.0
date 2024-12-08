const scholarshipSchema = require("../../models/scholarshipSchema");

const searchScholarShips = async (req, res) => {
        const filter = req.body.filter || "";
        const users = await scholarshipSchema.find({
            $or: [{
                title : {
                    "$regex": filter
                }
            },
                {
                description: {
                    "$regex": filter
                }
                },
                {
                links: {
                    "$regex": filter
                }
                },
                {
                rewardWoth: {
                    "$regex": filter
                }
                }
            ]
        });
        res.status(200).json({ list: users });
    };
    
    exports.searchScholarShips = searchScholarShips;