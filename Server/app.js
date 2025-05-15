const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use("/", (req, res, next) => {
  res.send("it is working");
});

if (DB_URL) {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .then(() => {
      app.listen(3000, () => {
        console.log(`Server is running on http://localhost:${3000}`);
      });
    })
    .catch((err) => console.log(err));
}
