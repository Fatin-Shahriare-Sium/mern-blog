const { signUpController, loginPostController } = require('../controller/authController')

let router=require('express').Router()
router.post('/signup',signUpController)
router.post('/login',loginPostController)
module.exports=router