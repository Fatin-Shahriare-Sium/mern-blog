let express=require('express')
let mongoose=require('mongoose')
let postRoute=require('./route/postRouter.js')
let authRoute=require('./route/authRouter.js')
var cookieParser = require('cookie-parser')
let cors=require('cors')
let app=express()
mongoose.connect(`mongodb+srv://adminx:7m7YnJ6looCJIFP5@taskmanager.xxfr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('mongodb connected successfully');
})
let middleware=[
    express.urlencoded({extended:true}),
    express.json(),
    cookieParser(),
    cors()
]
app.use(middleware)
app.use('/post',postRoute)
app.use('/auth',authRoute)
app.get('/',(req,res)=>{
    res.json({
        creator:'Allah is Almighty',

    })
})
app.listen('5000',()=>{
    console.log('Allah is Almighty,Alhamdulillah');
})