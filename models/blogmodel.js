const mongoose = require("mongoose");
const s = mongoose.Schema
const bs = new s
({
    userid:
    {
        type:s.Types.ObjectId,
        ref:"cname"
    },

 name:
 { 
        type:"string",
        required:"true"
 },

    
  desc:
{
    type:'string',
    required:"true"
} ,
image:{
    data:'Buffer',
    contentType:'string'
} 

})
const blogmodel = mongoose.model("blogs",bs);
module.exports = blogmodel;