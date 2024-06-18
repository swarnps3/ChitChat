const asyncHandler=require('express-async-handler');   //It will take care of the errors for us
const User=require('../models/userModel');
const generateToken=require('../config/generateToken');



const registerUser= asyncHandler(async(req, res)=>{
    const {name, email, password, pic}=req.body;

    if(!name || !email || !password)
        {   
            res.status(400);
            throw new Error('Please enter all the fields');
        }
    
    const userExists=await User.findOne({email})    //findOne is used in MongoDb to find the data
    if(userExists)
        {   
            res.status(400);
            throw new Error('User already exists');
        }

        const user= await User.create({
            name, 
            email, 
            password, 
            pic,
        });

        if(user)
            {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    pic: user.pic,
                    token: generateToken(user._id)
                })
            }
            else{
                res.status(400);
                throw new Error('Unable to create the User');
            }
});

const authUser=asyncHandler(async(req, res)=>{
    const {email, password}=req.body;

    const user= await User.findOne({email});

    if(user && (await user.matchPassword(password))){                                         //if user exists and password matches
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid Email or Password');
    }
});
module.exports={registerUser, authUser};