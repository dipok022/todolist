const router = require("express").Router();
const usetSchema = require("../model/user.model");

// get all users
router.get("/", (req, res) => {
  res.json("success");
});

// create a new user
router.post("/register", async (req, res) => {
  const emailRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
  try {
    const userExist = await usetSchema.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json("Email already exists");
    } else if (!emailRegex.test(req.body.password)) {
      return res
        .status(400)
        .json(
          "Password must 8 characters and include an uppercase & lowercase letter, number, and special character!."
        );
    }

    const user = new usetSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
