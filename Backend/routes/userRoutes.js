const express = require("express");
const {registerUser, authUser}=require("../controllers/userControllers");
const router = express.Router();

router.route('/').post(registerUser);
//Here .route(end point).post() defines that we can use multiple like get and post and can change
router.post('/login', authUser);
//Can't change the type of request here, Both are correct and can be used any

module.exports=router;
