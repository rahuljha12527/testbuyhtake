const express = require("express");
const invetorydb=require("../models/inventory");

const router = express.Router();


router.put('/updateQuantity',async function(req,res){
   const payload=
   [{productId:123,quantity:10,operation:"add"},
   
   {productId:143,quantity:14,operation:"add"},
   
   {productId:193,quantity:17,operation:"subtract"}];
   
   


   for(let i=0;i<payload.length;i++){
      //let updateProductQuantity=await updateOne({productId:i},{$set:{quantity:}})

      if(payload[i].operation==="add"){
        await invetorydb.aggregate([{productId:payload[i].productId},{$add :["$quantity",payload.quantity[i]]}])
    
      }
      else if(payload[i].operation==="subtract"){
        await invetorydb.aggregate([{productId:payload[i].productId},{$subtract :["$quantity",payload.quantity[i]]}])
    
    }
   }

   return  res.status(200).json({
    status:200,   
    message:"All data updated"
   })
});