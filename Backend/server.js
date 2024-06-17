const express = require('express');
const dotenv = require('dotenv');
const { chats } = require("./dummy/data");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('API is running on this page with server');
})

app.get('/api/chats', (req, res) => {
    res.send(chats);
})

app.get('/api/chats/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} successfully`);
});