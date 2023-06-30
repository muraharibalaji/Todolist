const usercont= require('../controller/todocontroller')
const express = require("express")


const router = express.Router()
router.post('/todolist',usercont.modellist)
module.exports=router;