const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const CryptoJS = require('crypto-js');
const Cart = require('../models/Cart');


//Create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (e) {
    res.status(500).json(e);
  }
});




//Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
  try{
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new:true});
    res.status(200).json(updatedCart);
  }
  catch(e){
    res.status(500).json(e);
  }
});




//Delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
  try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted.");
  }
  catch(e){
    res.status(500).json(e);
  }

});




//Get cart method
// The id will be user-id not cart-id
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
  try{
    const cart = await Cart.findOne({userId:req.params.userId});
    res.status(200).json(cart);

  }
  catch(e){
    res.status(500).json(e);
  }

});





//Get all carts
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (e) {
    res.status(500).json(e);
  }
});


module.exports = router;
