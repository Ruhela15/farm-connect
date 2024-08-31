const Farmer = require("../models/farmer");

exports.getFarmersByDistrict = async (req, res) => {
  const { district } = req.query;
  try {
    const farmers = await Farmer.find({ "location.district": district });
    res.json(farmers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmers" });
  }
};
