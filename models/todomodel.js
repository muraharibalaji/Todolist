const mongoose = require("mongoose");
const usermodel = require('./usermodel')
const s = mongoose.Schema
const ts =new s
({
    user_id:{
        type:s.Types.ObjectId,
                ref:"cname"
       
    },
    title:{
        type:"string", 
        required:true,
    },
    desc:{
        type:"string",
        required:true
    }
})

const todomodel = mongoose.model("todos",ts);
module.exports=todomodel;