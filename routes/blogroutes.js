const blogcont = require('../controller/blogcontroller');
const express = require('express');
const router = express.Router()
router.post('/createpost',blogcont.createpost);
router.post('./uploads',blogcont.uploads);
module.exports = router;