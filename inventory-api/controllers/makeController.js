const Make = require("../models/Make");

exports.make_get = (req, res, next) => {
  Make.find().exec((err, results) => {
    if (err) next(err);

    res.json(results);
  });
};

exports.make_put = (req, res, next) => {
  if (err) next(err);

  const newMake = new Make({
    name: req.body.name,
  });

  newMake.save((err) => {
    if (err) next(err);

    res.send("added new make");
  });
};
