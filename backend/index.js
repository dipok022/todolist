const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

// dotenv and mongoose connect
dotenv.config();
(async () => {
  await mongoose.connect(process.env.MONGO_DB);
  console.log("connect to Database");
})();

// middleware
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// port and listen
const PORT = 3300;
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
