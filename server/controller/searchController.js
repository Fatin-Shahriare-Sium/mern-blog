const Post = require("../model/post")


exports.textSearchController=async (req,res,next)=>{
    let {text}=req.params
    let searchedPost=await Post.find({$text:{$search:text}})
    res.json({
        searchedPost
    })
}
exports.topicSearchController=async (req,res,next)=>{
    let {text}=req.params
    let searchedPost=await Post.find({topic:text})
    res.json({
        searchedPost
    })
}