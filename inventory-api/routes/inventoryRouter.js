const express = require("express");
const router = express.Router();

// Import Controllers
const makeController = require("../controllers/makeController");

// Return all current makes
router.get("/make/", makeController.make_get);
router.post("/make/", makeController.make_put);

module.exports = router;
