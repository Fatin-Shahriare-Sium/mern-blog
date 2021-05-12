let {Schema,model}=require('mongoose')

let postSchema=new Schema({
    title:String,
    body:String,
    thumbnail:{
        src:String,
        alt:String
    },
    topic:String,
    publish:Boolean,
    tags:[String],
    author:[{
        type:Schema.Types.ObjectId,
        ref:'author'
    }]
},{timestamps:true})

let Post=model('post',postSchema)

module.exports=Post