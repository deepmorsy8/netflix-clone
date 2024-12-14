const mongoose = require("mongoose")

const connectDB =()=>{
  mongoose.connect("mongodb+srv://deeptadhani6:Ez5ABKXdCl7jISxS@cluster0.vkoif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("db connect success");
  }).catch((err)=>{
    console.log(err,"err");
  })
}

module.exports = {connectDB}
