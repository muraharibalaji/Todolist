const todomodel = require('../models/todomodel')

class todoservice{
    static async addtodo(user_id,title,desc){
        try{
            const createtodo=await todomodel.create({user_id,title,desc})
            return createtodo;
            }
        catch(err){
            console.log(err)
            }
        }
    
    static async gettodo(user_id){
        try{
            const getdata = await todomodel.find({user_id});
            return getdata;
        }
        catch(err){
            console.log(err);
            }
        }
         
    static async deletetodo(id) {
        try {
            const deleted = await todomodel.findOneAndDelete({ _id: id });
            return deleted;
            }
        catch (err) {
            console.log(err);
            }
        }
}

module.exports=todoservice;