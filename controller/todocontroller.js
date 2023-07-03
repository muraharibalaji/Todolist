const ts= require('../service/todoservice');

const Createtask = async(req,res)=>{
    try{
        const{user_id,title,desc}=req.body;
        let todo = await ts.addtodo(user_id, title, desc);
        res.json({
            status: true,
            sucess: todo
        })
    }
    catch(err){  
        console.log(err);
    }
}

const viewtask = async (req, res) => {
    try {
        const { user_id } = req.body;
        let todo = await ts.gettodo(user_id);
        res.json({
            status: true,
            sucess: todo
        })
    }
    catch (err) {
        console.log(err);
    }
}
    
const deletetask = async (req, res) => {
    try {
        const {_id} = req.body;
        let deleted = await ts.deletetodo(_id);
        res.json({
            status: true,
            sucess: deleted
        })
    } 
    catch (err) {
        console.log(err);
    }
}
    
module.exports={Createtask,viewtask,deletetask}