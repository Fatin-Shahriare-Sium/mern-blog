let {Schema,model}=require('mongoose')

let topicSchema=new Schema({
    money:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }],
    digital:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }],
    civil:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }],
    credit:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }],
    miscellaneous:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }]
})

let Topic=model('topic',topicSchema)

module.exports=Topic