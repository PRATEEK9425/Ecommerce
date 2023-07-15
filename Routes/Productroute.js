const express = require("express")
const { productModel } = require("../Models/Productmodel")

const ProductRoutes = express.Router()

ProductRoutes.get("/",async(req,res)=>{
    
    try{
const product = await productModel.find()
res.send(product)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})
ProductRoutes.get("/:id",async(req,res)=>{
    const id = req.params.id
    try{
  const product = await  productModel.findOne({"_id":id})
  res.send(product)
    }catch(err){
  console.log(err)
  res.send({"msg":"Err while gettting data"})
    }
  })

ProductRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const product = new productModel(payload)
await product.save()
res.send("Added  Product to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Product to Db"})
  }
})


ProductRoutes.patch("/update/:id",async(req,res)=>{
  const payload = req.body
  const id = req.params.id
const product = await productModel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to update"})
  }else{
    await productModel.findByIdAndUpdate({"_id":id},payload)
    res.send("Product Updated in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})


ProductRoutes.delete("/remove/:id",async(req,res)=>{
    
  
  const id = req.params.id
const product = await productModel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to Delete"})
  }else{
    await productModel.findByIdAndDelete({"_id":id})
    res.send("ProductDeleted from in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})






module.exports={
    ProductRoutes
}