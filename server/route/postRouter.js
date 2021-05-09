const { createPostController } = require('../controller/postController')

let router=require('express').Router()

router.post('/create',createPostController)

module.exports=router