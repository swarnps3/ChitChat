const express = require("express");
const {registerUser, authUser, allUsers}=require("../controllers/userControllers");
const router = express.Router();
const {protect}=require("../middleware/authMiddleware")

router.route('/').post(registerUser).get(protect,allUsers);  //Protect is used first to authorize the user and then give access
//Here .route(end point).post() defines that we can use multiple like get and post and can change

router.post('/login', authUser);
//Can't change the type of request here, Both are correct and can be used any

module.exports=router;
