const todomodellist = require('../models/todomodellist')
class userservice{
    static async todolist(id,title,desc){
        try{
                const createuser=await todomodellist.create({id,title,desc})
                return createuser
            }
               catch(err){
                console.log(err)
            }
            }
        
        
         
        }
        module.exports=userservice