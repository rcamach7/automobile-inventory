const express = require("express");
const router = express.Router();

// Import Controllers
const makeController = require("../controllers/makeController");
const automobileController = require("../controllers/automobileController");

// * Make CRUD endpoints
// Return all current makes
router.get("/makes/", makeController.make_get);
// Return specific make information
router.get("/makes/:id", makeController.make_get_id);

// Create a new make
router.post("/makes/", makeController.make_post);

// Delete a make given an ID parameter
router.delete("/makes/:id/delete", makeController.make_delete);

// Update a make name given an ID parameter and body information
router.put("/makes/:id/put", makeController.make_put);

// * Automobile CRUD endpoints
// Return all automobile documents
router.get("/automobiles/", automobileController.automobile_get);
// Return specific instance of an automobile
router.get("/automobiles/:id", automobileController.automobile_get_id);

// Create new automobile document
router.post("/automobiles/", automobileController.automobile_post);

// Delete a automobile by providing an ID
router.delete(
  "/automobiles/:id/delete",
  automobileController.automobile_delete
);

// Update an automobile by providing ID
router.put("/automobiles/:id/put", automobileController.automobile_put);

module.exports = router;
