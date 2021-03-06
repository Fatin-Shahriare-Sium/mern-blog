let {Schema,model}=require('mongoose')

let postSchema=new Schema({
    title:String,
    body:String,
    description:String,
    thumbnail:{
        src:String,
        alt:String
    },
    views:Number,
    topic:String,
    publish:Boolean,
    tags:[String],
    author:[{
        type:Schema.Types.ObjectId,
        ref:'author'
    }]
},{timestamps:true})
postSchema.index({
    title:'text',
    body:'text'
},{
    weights:{
        title:5,
        body:3
    }
})
let Post=model('post',postSchema)

module.exports=Post