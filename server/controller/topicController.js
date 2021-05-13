let Topic=require('../model/topic.js')
exports.getAllTopicController=async (req,res,next)=>{
    let topics=await Topic.find()
    console.log(topics);
    res.status(200).json({
        topic:topics[0]
    })

}