const userservice= require('../service/userservice');
const register = async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await userservice.registeruser(email,password);
        res.json(user);
    }
    catch(err){
        console.log(err);
        }
    }
    module.exports={register}

