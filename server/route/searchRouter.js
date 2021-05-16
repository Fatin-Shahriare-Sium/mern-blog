const { textSearchController, topicSearchController } = require('../controller/searchController')

let router=require('express').Router()

router.get('/:text',textSearchController)
router.get('/topic/:text',topicSearchController)
module.exports=router