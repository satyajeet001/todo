const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.route("/todos").post(controllers.contactForm);

module.exports = router;
