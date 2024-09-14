const scholarshipSchema = require('../../models/scholarshipSchema');

const deleteScholarShips = async (req, res) => {
    try {
        const scholarship = await scholarshipSchema.findByIdAndDelete(req.body.id);
        if (!scholarship) {
            return res.status(404).send();
        }
        res.status(200).json(scholarship);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteScholarShips = deleteScholarShips;