const router = require('express').router;
const stripe = require('stripe')(sk_test_51LUH4fGU0u7ENBFFlaRhUpcYxajrHkWREsK0KsXBfrP2Be5JOuYyC0R8xfUL9q4JaKTHcN8G2dlHconTXUS4tq7p00tdx4D9SS);


router.post("/", (req,res)=>{
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd",
  },(stripeErr, stripeRes)=>{
    if (stripeErr) {
      res.status(500).json(stripeErr);
    } else {
      res.status(200).json(stripeRes);
    }
  });




});


module.exports = router;
