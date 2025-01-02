const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

// dotenv and mongoose connect
dotenv.config();
(() => {
  mongoose.connect();
})();

// middleware
const app = express();
app.use(helmet());
app.use(morgan("common"));

// port and listen
const PORT = 3300;
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
