const bs = require('../service/blogservice');
const multer = require('multer');
const fs = require('fs');
var bodyparser = require('body-parser');

const addpost = async (req,res)=>{
    try{
        const {userid,name,desc,image} = req.body;
        const user = await bs.createpost(userid,name,desc,image);
         res.json(user);

    }
    catch(err){
        console.log(err);
    }

}


const uploads = async (req,res,next)=>{
    var readfile = Buffer.from(req.body.image,"base64");
    fs.writeFileSync(req.body.name.realFile,"utf8")
    console.log("image uploads");
    await res.send({message:"upload image in flutter"});
}


module.exports = {addpost,uploads};