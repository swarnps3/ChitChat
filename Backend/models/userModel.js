//1. name
//2. email
//3. password 
//4. picture
//of the user

const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    name:{type: "String", required: true},
    email:{type: "String", required:true, unique:true},
    password:{type: "String", required:true},
    pic:{type:"String", default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",}
},
{ timestaps: true });
//To compare the entered password with the stored password 
userSchema.methods.matchPassword=async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword, this.password);
}

//Before saving the user to our database, the following segment encrypts the password
userSchema.pre('save', async function(next){           //next is a middleware
    if(!this.isModified)
        {
            next();                                     //Stop the running of code if password is not modified
        }
        const salt=await bcrypt.genSalt(10);            //Higher the no.(here 10), stronger the salt
        this.password= await bcrypt.hash(this.password, salt);
})



const User=mongoose.model("User", userSchema);
module.exports=User;