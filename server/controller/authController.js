const Author = require("../model/author")
let bcrypt=require('bcrypt')
exports.signUpController=async (req,res,next)=>{
    let {email,password}=req.body
    let hashed=await bcrypt.hash(password,11)
    let newAuthor=new Author({
        name:'Shawon',
        email,
        profilePic:'https://snworksceo.imgix.net/dtc/3f037af6-87ce-4a37-bb37-55b48029727d.sized-1000x1000.jpg?w=1000',
        password:hashed,
        posts:[]

    })

    try{
        let author=newAuthor.save()
        res.json({
            msg:'Successfully,create an account',
            color:'success'

        })
    }catch{
        res.json({
            msg:'Failed to create account',
            color:'warning'
    
        })
    }
    
}
exports.loginPostController=async (req,res,next)=>{
    let {email,password}=req.body
    let author=await Author.findOne({email:email})
    res.cookie('idx', author._id)
    try{
        let matched=await bcrypt.compare(password,author.password)
    if(matched){
        res.json({
            msg:'Successfully,login',
            color:'success',
            success:true

        })
    }else{
        res.json({
            msg:'Failed to login',
            color:'danger',
            success:false
    
        })
    }
    }catch{
      
        res.json({
            msg:'Failed,network error',
            color:'warning',
            success:false
    
        })
    
    }
}