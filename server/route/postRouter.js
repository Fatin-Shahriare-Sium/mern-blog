const { createPostController, getAllPostController, getSinglePost } = require('../controller/postController')

let router=require('express').Router()

router.post('/create',createPostController)
router.get('/all',getAllPostController)
router.get('/:id',getSinglePost)
module.exports=router