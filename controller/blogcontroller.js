const bs = require('../service/blogservice');
const multer = require('multer');
const app = require('express');


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

// Define the route for image uploads



module.exports = {addpost};