const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


//Register route
router.post("/register", async (req,res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "process.env.pass_key"),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  }

  catch (e) {
    res.status(500).json(e);
  }


});





//Login route
router.post("/login", async (req,res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("wrong username");

    const pass = CryptoJS.AES.decrypt(user.password, "process.env.pass_key").toString(CryptoJS.enc.Utf8);
    // const password = hashpass.toString(CryptoJS.enc.Utf8);
    pass !== req.body.password && res.status(401).json("wrong password");

    //JWT
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    },
    "process.env.JWT_KEY",//.env method is not working so i manully give key
    {expiresIn:"1d"});

    const {password, ...others} = user._doc;

    res.status(200).json({...others, accessToken});

  }catch(e){
    // res.status(500).json(e);
  }
});


module.exports = router;
