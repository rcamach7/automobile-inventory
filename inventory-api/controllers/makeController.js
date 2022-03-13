const Make = require("../models/Make");
const { body, validationResult } = require("express-validator");

// Retrieve all makes currently in our database
exports.make_get = (req, res, next) => {
  Make.find().exec((err, results) => {
    if (err) next(err);

    res.json(results);
  });
};

// Will insert a new make into our database
exports.make_post = [
  // Will pass the data into a validator
  body("name", "Make name required").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    // If errors exists that the validator caught, we will return the errors and not process the new make
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      // If the make passes validation, we will now make sure it's not a repeat make that already exists.
      Make.find({ name: req.body.name }).exec((err, results) => {
        if (err) next(err);

        if (results.length > 0) {
          res.send("Make already exists");
        } else {
          // We can now safely process the sanitized and unique data
          const newMake = new Make({
            name: req.body.name,
          });
          newMake.save((err) => {
            if (err) next(err);

            // We will send back the created make as a successful signal of creation
            res.json(newMake);
          });
        }
      });
    }
  },
];

exports.make_delete = (req, res, next) => {
  Make.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) next(err);

    if (result === undefined) {
      res.send(`Make with ID: ${req.params.id} not found`);
    } else {
      res.send("Make has been deleted");
    }
  });
};

// Will update a make given an ID and information through the body
exports.make_put = [
  // Will pas the data into a validator
  body("name", "Make name required").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If validators caught any errors, we don't process update data
      res.send(errors);
    } else {
      // Must keep same id to avoid duplication of document
      const updatedMake = new Make({
        _id: req.params.id,
        name: req.body.name,
      });

      Make.findByIdAndUpdate(req.params.id, updatedMake, {}, (err) => {
        if (err) next(err);

        res.json(updatedMake);
      });
    }
  },
];
