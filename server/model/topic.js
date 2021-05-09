let {Schema,model}=require('mongoose')

let topicSchema=new Schema({
    money:[{
        id:Schema.Types.ObjectId,
        ref:'post'
    }],
    digital:[{
        id:Schema.Types.ObjectId,
        ref:'post'
    }],
    civil:[{
        id:Schema.Types.ObjectId,
        ref:'post'
    }],
    sports:[{
        id:Schema.Types.ObjectId,
        ref:'post'
    }]
})

let Topic=model('topic',topicSchema)

module.exports=Topic