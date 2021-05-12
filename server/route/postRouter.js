const { createPostController, getAllPostController } = require('../controller/postController')

let router=require('express').Router()

router.post('/create',createPostController)
router.get('/all',getAllPostController)
module.exports=router