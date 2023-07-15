const mongoose = require("mongoose")

const womensSchema = mongoose.Schema({
   product:String,
   product_img:String,
   price:Number,
   rating:Number,
   Available_stock:Number
})

const womensModel = mongoose.model("womensdata",womensSchema)

module.exports={
    womensModel
}