const usermodel = require('../models/usermodel')

const jwt = require('jsonwebtoken');
class userservice{
    static async registeruser(email,password){
try{
    const createuser=await usermodel.create({email,password})
    return createuser
}
   catch(err){
    console.log(err)
}
}

static async checkuser(email){
    try{
        return await usermodel.findOne({email});
    }
    catch(err){
        console.log(err);
    }
}
static async generatetoken(tokendata,secretkey){
    try{
        return jwt.sign(tokendata,secretkey,{expiresIn:'1w'});

    }
    catch (err){
        console.log(err);
    }
}


 
}
module.exports=userservice