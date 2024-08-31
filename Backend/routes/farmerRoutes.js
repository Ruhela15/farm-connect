const express = require("express");
const router = express.Router();
const { getFarmersByDistrict } = require("../controllers/farmerController.js");

router.get("/", getFarmersByDistrict);

module.exports = router;
