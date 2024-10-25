const mongoose = require("mongoose");
const URI = process.env.MONGODBURL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
