const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    district: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Farmer", FarmerSchema);
