const express = require("express");
const mongoose = require("mongoose");
const inventoryRouter = require("./routes/inventoryRouter");
const app = express();

// Database Information
const dev_db_url =
  "mongodb+srv://rcamach7:locallibrary@cluster0.j81qo.mongodb.net/automobile_inventory?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

// Middleware set-up
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define Definitions
app.use("/inventory", inventoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
