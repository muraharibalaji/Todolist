const todocont = require('../controller/todocontroller');
const express = require('express');
const router = express.Router()
router.post('/addtodo',todocont.createtask);
router.post('/gettodo',todocont.viewtask);
router.post('/deletetodo',todocont.deletetask);
module.exports = router;