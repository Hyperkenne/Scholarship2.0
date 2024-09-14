const scholarshipSchema = require("../../models/scholarshipSchema");

const updateScholarShips = async (req, res) => {
  try {
    const scholarship = await scholarshipSchema.findByIdAndUpdate(
      req.query.id,
      req.body,
      { new: true }
    );
    if (!scholarship) {
      return res.status(404).send();
    }
    res.send(scholarship);
  } catch (err) {
    res.status(500).send(err);
  }
};


exports.updateScholarShips = updateScholarShips;