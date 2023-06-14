const mongoose=require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);


const inventory=new mongoose.Schema({
      product:{
        type: Int32,
      },

      quantity:{
        type: Int32,
      },

      operations:{
          type:String
      }
   
},{
    timestamps:true
})

const inventorydata=mongoose.model('inventory',inventory);

module.exports=inventory;