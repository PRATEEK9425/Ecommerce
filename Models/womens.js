const mongoose = require("mongoose")

const womensschema = mongoose.Schema({
   product:String,
   product_img:String,
   price:Number,
   rating:Number,
   Available_stock:Number
})

const womensmodel = mongoose.model("womensdata",womensschema)

module.exports={
    womensmodel
}