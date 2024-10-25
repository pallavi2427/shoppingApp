const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();

router.post("/contact-us", contactController.contactUs);

module.exports = router;
