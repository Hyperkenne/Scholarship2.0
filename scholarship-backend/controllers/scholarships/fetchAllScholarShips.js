const scholarshipSchema = require("../../models/scholarshipSchema");

const fetchAllScholarShips = async (req, res) => {
    try {
        const scholarships = await scholarshipSchema.find();
        res.send(scholarships);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.fetchAllScholarShips = fetchAllScholarShips;