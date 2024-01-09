//1. name
//2. email
//3. password 
//4. picture
//of the user

const mongoose=require('mongoose');

const userModel=mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    pic:{type:String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",}
},
{ timestaps: true });

const User=mongoose.model("User", userModel);
module.exports=User;