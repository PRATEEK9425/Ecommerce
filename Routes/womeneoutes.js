const express = require("express")
const { womensmodel } = require("../Models/womens")


const womenroutes = express.Router()

womenroutes.get("/",async(req,res)=>{
    
    try{
const product = await womensmodel.find()
res.send(product)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})

womenroutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const product = await  womensmodel.findOne({"_id":id})
res.send(product)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})
womenroutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const product = new womensmodel(payload)
await product.save()
res.send("Added  Product to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Product to Db"})
  }
})


womenroutes.patch("/update/:id",async(req,res)=>{
  const payload = req.body
  const id = req.params.id
const product = await womensmodel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to update"})
  }else{
    await womensmodel.findByIdAndUpdate({"_id":id},payload)
    res.send("Product Updated in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})


womenroutes.delete("/remove/:id",async(req,res)=>{
    
  
  const id = req.params.id
const product = await womensmodel.findOne({"_id":id})
const product_present_in_Db= product.userID
const userId_making_req=req.body.userID
try{
  if(userId_making_req!==product_present_in_Db){
    res.send({"msg":"You are not Authorized to Delete"})
  }else{
    await womensmodel.findByIdAndDelete({"_id":id})
    res.send("ProductDeleted from in Db")
  }

}catch(err){
console.log(err)
res.send({"msg":"something went wrong"})
}
})

module.exports ={
    womenroutes
}