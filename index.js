const express = require('express');
const mongoose = require("mongoose");
// const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/Cart');
const orderRoute = require('./routes/Order');

const app = express();


//dotenv is not working || don't know why?
// dotenv.config({ path: './config.env' });
// const url = process.env.MONGO_URL;

//MongoDB connection
//Add username and password below for mongo db connection
mongoose
  .connect('mongodb+srv://<username>:<password>@cluster0.sixxw.mongodb.net/shop?retryWrites=true&w=majority')
  .then(()=>console.log("db connection succesfull"))
  .catch((err) => {
    console.log(err);
  });





app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);








//PORT
const PORT = 5000;
app.listen(PORT,()=>{
  console.log(`Server runing on port ${PORT}....`);
})
