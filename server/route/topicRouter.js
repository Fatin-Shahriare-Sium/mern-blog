const { getAllTopicController } = require('../controller/topicController')

let router=require('express').Router()

router.get('/',getAllTopicController)

module.exports=router