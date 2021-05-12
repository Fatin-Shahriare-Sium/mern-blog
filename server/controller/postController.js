const Post = require("../model/post");
const Topic = require("../model/topic");

exports.createPostController=async (req,res,next)=>{
    console.log(req.body);
    let {title,body,img,alt,publish,tags,topic}=req.body
    let post=new Post({
        title,
        body,
        thumbnail:{
            src:img,
            alt:alt
        },
        topic,
        publish:publish,
        tags,
        author:req.cookies.idx
    })
 
    function detectTopic(){
        if(topic=='credit'){
            return 'credit'
        }else if(topic=='miscellaneous'){
            return  'miscellaneous'
        }else if(topic=='digital'){
            return  'digital'
        }else if(topic=='money'){
            return 'money'
        }else if(topic=='civil'){
            return 'civil'
        }
    }
  
    try{
        let newPost=await post.save()
      let topicx=detectTopic()
        let t=await Topic.findOneAndUpdate({_id:"609b68361828f82430db35fc"},{
            $push:{[topicx]:newPost._id}
        })
        res.status(200).json({
            msg:'Successfully,created a new post',
            color:'success'
        })

      
        
    }catch{
        res.status(200).json({
            msg:'Failed to create a new post',
            color:'danger'
        })
    }
}
exports.getAllPostController=async (req,res,next)=>{
    let allPost=await Post.find()
        res.json({
            posts:allPost
        })
}