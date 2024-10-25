const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router.post("/register", userController.registration);
router.post("/login", userController.login);
router.get("/getUser/:id", userController.getUser);

module.exports = router;
