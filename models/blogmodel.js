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
    type:'string',
    required:'true'
} 

})
const blogmodel = mongoose.model("blogs",bs);
module.exports = blogmodel;