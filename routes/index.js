const express = require("express");
const User = require("../models/User");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
