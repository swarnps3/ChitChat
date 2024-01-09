//1. Sender
//2. Content
//3. Chat

const mongoose=require('mongoose');

const messageModel=mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    content:{type: String, ref:"Message"},
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    }
}, 
{
    timestamps:true,
});

const Message=mongoose.model("Message", messageModel);
module.exports=Message;