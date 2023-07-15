const express = require("express")
const { cartmodel } = require("../Models/Cart")



const CartRoutes = express.Router()

CartRoutes.get("/",async(req,res)=>{
    
    try{
const product = await cartmodel.find()
res.send(product)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})

// CartRoutes.get("/:id",async(req,res)=>{
//   const id = req.params.id
//   try{
// const product = await  cartmodel.findOne({"_id":id})
// res.send(product)
//   }catch(err){
// console.log(err)
// res.send({"msg":"Err while gettting data"})
//   }
// })


CartRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const product = new cartmodel(payload)
await product.save()
res.send("Added  Product to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Product to Db"})
  }
})


CartRoutes.patch("/update/:id",async(req,res)=>{
  const payload = req.body
  const id = req.params.id
const product = await cartmodel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to update"})
  }else{
    await cartmodel.findByIdAndUpdate({"_id":id},payload)
    res.send("Product Updated in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})


CartRoutes.delete("/remove/:id",async(req,res)=>{
    
  
  const id = req.params.id
const product = await cartmodel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to Delete"})
  }else{
    await cartmodel.findByIdAndDelete({"_id":id})
    res.send("ProductDeleted from in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})






module.exports={
    CartRoutes
}