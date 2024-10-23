// mongo db   instaall
// import mongoose
// mongoose is an ORM

const mongoose = require("mongoose");
// const url = "mongodb+srv://shoaibbhat007:Kashmir7271@cluster0.zpthh.mongodb.net/ShopFusion?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb://localhost:27017/shopFusion"

const connectDB = async () => {
  try {

  await  mongoose.connect(url)
  console.log("Database Connected !")

  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
