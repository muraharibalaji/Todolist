const usercont= require('../controller/usercontroller')
const express = require("express")


const router = express.Router()



router.post('/register',usercont.register);
module.exports=router;