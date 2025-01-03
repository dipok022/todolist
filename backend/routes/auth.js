const router = require("express").Router();
var jwt = require("jsonwebtoken");
const usetSchema = require("../model/user.model");

// get all users
router.get("/users", async (req, res) => {
  try {
    const allUsers = await usetSchema.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

// create a new user
router.post("/register", async (req, res) => {
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
  try {
    const userExist = await usetSchema.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json("Email already exists");
    } else if (!passRegex.test(req.body.password)) {
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

// login a user
router.post("/login", async (req, res) => {
  try {
    const user = await usetSchema.findOne({});
    if (!user.email || !user.password) {
      return res.status(401).json("Invalid email or password");
    }
    const token = jwt.sign(
      { id: process.env.JWT_SECRET },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
