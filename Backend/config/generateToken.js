//JWT helps us to authorize user in the backend
const jwt=require("jsonwebtoken");

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "72d",
    });
};

module.exports=generateToken;