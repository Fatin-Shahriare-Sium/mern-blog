let {Schema,model}=require('mongoose')

let postSchema=new Schema({
    title:String,
    body:String,
    thumbnail:String,
    tags:[String],
    user:[{
        id:Schema.Types.ObjectId,
        ref:'user'
    }]
},{timestamps:true})

let Post=model('post',postSchema)

module.exports=Post