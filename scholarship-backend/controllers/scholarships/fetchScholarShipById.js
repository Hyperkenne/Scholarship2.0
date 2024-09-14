const scholarshipSchema = require("../../models/scholarshipSchema");

const fetchScholarShipById = async (req, res) => {
    try {
        const scholarship = await scholarshipSchema.findById(req.params.id);
        if (!scholarship) {
            return res.status(404).send();
        }
        res.send(scholarship);
    } catch (err) {
        res.status(500).send(err);
    }
}


exports.fetchScholarShipById = fetchScholarShipById;