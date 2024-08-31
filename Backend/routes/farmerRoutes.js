const express = require("express");
const router = express.Router();
const { getFarmersByDistrict } = require("../controllers/farmerController");

router.get("/", getFarmersByDistrict);

module.exports = router;
