const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const pharmacy = require("../../models/pharmacy");

router.post("/register", require("./register"));
router.post("/login", require("./login"));

router.post("/addpharmacy", require("./addpharmacy"));
router.get("/addresspharmacy/:address", require("./addresspharmacy"));
router.get("/listpharmacy", require("./listpharmacy"));
router.get("/pharmacies", require("./pharmacies"));

module.exports = router;
