const mongoose = require("mongoose");
const s = mongoose.Schema
const us =new s
({
    id:{
        type:"string",
        required:true,
    },
    title:{
        type:"string",
        required:true,
    },
    desc:{
        type:"string",
        requires:true
    }
})

const todomodellist = mongoose.model("fname",us);
module.exports=todomodellist;