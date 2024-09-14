const scholarshipSchema = require('../../models/scholarshipSchema');

const addScholarShips = async (req, res) => {
    try {
        const scholarship = await scholarshipSchema.create(req.body);
        await scholarship.save();
        res.status(201).send(scholarship);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}



exports.addScholarShips = addScholarShips;