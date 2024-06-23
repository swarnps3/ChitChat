const asyncHandler = require("express-async-handler"); //It will take care of the errors for us
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email }); //findOne is used in MongoDb to find the data
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    //Create the user with given data from frontend
    name,
    email,
    password,
    pic,
  });

  if (user) {
    //Sending the data, if user is valid
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id), //Token is used to authorize the user to access certain data
    });
  } else {
    res.status(400);
    throw new Error("Unable to create the User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    //if user exists and password matches
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

// We have made allUsers to search for a particular user and for that we need to use url:- /api/user?search=<What we want to query>    This is a query and we have used question mark in user to perform it
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          //$or in mongoDb performs or operation of given results and return True of False
          { name: { $regex: req.query.search, $options: "i" } }, //regex is used to match strings in mongoDb, options here "i":- case insensitive
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};      //else do nothing if user not found
  const users = await User.find(keyword).find({ _id: {$ne: req.user._id}});  //next find is used to exclude the user which is logged in from the search. It is done using middleware 
  res.send(users);

  // console.log(keyword);
});
module.exports = { registerUser, authUser, allUsers };
