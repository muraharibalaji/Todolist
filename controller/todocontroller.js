const userservice= require('../service/todoservice');

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
        modellist
    }