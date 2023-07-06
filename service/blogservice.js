const blogmodel = require('../models/blogmodel');
class blogservice
{

static async createpost (userid,name,desc,image){
    try{
        const cp = await blogmodel.create({userid,name,desc,image});
        return cp;
    }
    catch(err){
        console.log(err);
    }
}

static async uploads (image){
    try{
        const cp = await blogmodel.uploads ({image});
        return cp;
    }
    catch (err){
        console.log(err);
    }
}


}

module.exports = blogservice;