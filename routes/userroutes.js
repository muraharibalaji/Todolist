const usercont= require('../controller/usercontroller')
const express = require("express")


const router = express.Router()



router.post('/register',usercont.register);
router.post('/login',usercont.login);

module.exports=router;