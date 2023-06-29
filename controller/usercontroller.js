const userservice= require('../service/userservice');
const bcrypt = require('bcrypt');

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
    
const login = async (req,res)=>{
        try{
            const {email,password} = req.body;
            
            //finding the user
const user = await userservice.checkuser(email);
if(!user){
     throw new Error('mail not found');
   // res.send("User not found")
}
// checking the password
const ismatch = await bcrypt.compare(password,user.password);
if(!ismatch){
    throw new Error("invalid password")
}
let tokenData ={
    id:user._id,
    email:user.emaily
 }
const t = await userservice.generatetoken(tokenData,'secretkey');
res.status(200).json({
    status:true,
    token:t })


}
        catch (err){
            console.log(err)
        }


    }
        const modellist = async(req,res)=>{
            try{
                const{id,title,desc}=req.body;
                const user=await userservice.todolist(id,title,desc);
                res.json(user);
            }
            catch(err){
                console.log(err);
                }
            }



    

    module.exports={
        register,
        login,
        modellist
    }

