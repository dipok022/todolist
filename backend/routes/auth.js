const router = require("express").Router();

// get all users
router.get("/", (req, res) => {
  res.json("success");
});

module.exports = router;
