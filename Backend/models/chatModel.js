//1. Chat Name
//2. isGroupChat
//3. Users
//4. latest message
//5. groupAdmin(if it isGroupChat)

const mongoose=require('mongoose');

const chatModel=mongoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroupChat:{type: boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,      //will contain id to the perticular user
            ref:"User",                               //Reference to user model
        },],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

    },
    {
        timestamps:true,
    }
);

const Chat=mongoose.model("Chat", chatModel);
module.exports=Chat;