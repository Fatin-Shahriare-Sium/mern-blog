let {Schema,model}=require('mongoose')
let userSchema=new Schema({
    name:String,
    email:String,
    profilePic:String,
    password:String,
    posts:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }]

},{timestamps:true})

let Author=model('author',userSchema)

module.exports=Author