const express = require("express");
const router = express.Router();

// Import Controllers
const makeController = require("../controllers/makeController");

// Return all current makes
router.get("/make/", makeController.make_get);

// Create a new make
router.post("/make/", makeController.make_post);

// Delete a make given an ID parameter
router.delete("/make/:id/delete", makeController.make_delete);

// Update a make name given an ID parameter and body information
router.put("/make/:id/put", makeController.make_put);

module.exports = router;
