// Created this file for connecting application to mongodb
const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(`MONGO_URI: ${process.env.MONGO_URI}`); // Add this line to log the URI. For MONGO_URI, need to change the uri's password using percent encoding mentioned on mongodb atlas(online)

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
