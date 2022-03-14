const Make = require("../models/Make");
const Automobile = require("../models/Automobile");
const { body, validationResult } = require("express-validator");

exports.automobile_get = (req, res, next) => {
  Automobile.find().exec((err, results) => {
    if (err) next(err);

    res.json(results);
  });
};

exports.automobile_post = [
  // Run the provided data through our validators
  body("make", "Please provide an make")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .isAlphanumeric(),
  body("engine", "Please provide an engine").trim().escape(),
  body("model", "Please provide a model").trim().isLength({ min: 1 }).escape(),
  body("year", "Please provide a year")
    .isNumeric()
    .withMessage("Please provide only numbers"),
  body("price", "Please provide a price")
    .isNumeric()
    .withMessage("Please provide only numbers"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Data given does not pass out validation requirements
      res.send(errors);
    } else {
      const newAutomobile = new Automobile({
        make: req.body.make,
        engine: req.body.engine,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
      });

      newAutomobile.save((err) => {
        if (err) next(err);

        res.json(newAutomobile);
      });
    }
  },
];

// Delete endpoint given an ID as a parameter
exports.automobile_delete = (req, res, next) => {
  Automobile.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) next(err);

    if (result === undefined) {
      res.send(`Automobile with ID: ${req.params.id} not found`);
    } else {
      res.send("Automobile has been deleted");
    }
  });
};

// Update endpoint given a ID as a parameter
exports.automobile_put = [
  body("make", "Please provide an make")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .isAlphanumeric(),
  body("engine", "Please provide an engine").trim().escape(),
  body("model", "Please provide a model").trim().isLength({ min: 1 }).escape(),
  body("year", "Please provide a year")
    .isNumeric()
    .withMessage("Please provide only numbers"),
  body("price", "Please provide a price")
    .isNumeric()
    .withMessage("Please provide only numbers"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      const updatedAutomobile = new Automobile({
        make: req.body.make,
        engine: req.body.engine,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        id_: req.params.id,
      });

      Automobile.findByIdAndUpdate(
        req.params.id,
        updatedAutomobile,
        {},
        (err) => {
          if (err) next(err);

          res.json(updatedAutomobile);
        }
      );
    }
  },
];
