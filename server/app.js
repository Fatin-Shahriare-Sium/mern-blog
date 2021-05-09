let express=require('express')
let postRoute=require('./route/postRouter.js')
let app=express()
app.use('/post',postRoute)
app.get('/',(req,res)=>{
    res.json({
        creator:'Allah is Almighty',

    })
})
app.listen('5000',()=>{
    console.log('Allah is Almighty,Alhamdulillah');
})