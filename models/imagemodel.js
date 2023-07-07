
const mongoose = require("mongoose");
const s = mongoose.Schema
const bs = new s
({
image:{
    data:'Buffer',
    contentType:'string'
} 

})
const imgmodel = mongoose.model("img",bs);
module.exports = imgmodel;