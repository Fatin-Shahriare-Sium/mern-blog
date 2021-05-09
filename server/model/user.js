let {Schema,model}=require('mongoose')
let userSchema=new Schema({
    name:String,
    email:String,
    profilePic:String,
    password:String,
    posts:[{
        id:Schema.Types.ObjectId,
        ref:'post'
    }]

},{timestamps:true})

let User=model('user',userSchema)

module.exports=User