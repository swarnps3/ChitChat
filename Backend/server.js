const express = require('express');
const dotenv = require('dotenv');
const { chats } = require("./dummy/data");
const connectDB=require("./config/db");
const colors=require("colors");
const userRoutes=require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());  //To accept JSON data from frontend

app.get('/', (req, res) => {
    res.send('API is running on this page with server');
})

app.use('/api/user', userRoutes)   //we will extract all the logic related to user inside this userRoutes

// app.get('/api/chats', (req, res) => {
//     res.send(chats);
// })

// app.get('/api/chats/:id', (req, res) => {
//     console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} successfully`.yellow.bold);
});