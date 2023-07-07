
const mongoose = require("mongoose");
const s = mongoose.Schema
const is = new s
({
image:{
    data:Buffer,
    contentType:String
} 

})
const imgmodel = mongoose.model("img",is);
module.exports = imgmodel;