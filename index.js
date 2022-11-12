require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const http =  require('http').Server(app)
const socket = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

app.use(cors());
app.use(express.json());

socket.on('connection', (socket) => {
    console.log(`user ${socket.id} just connected!`)
})
socket.on('disconnect', (socket) => {
    console.log(`user ${socket.id} disconnected`)
})



app.get('/', (req, res) => {

    res.send('Hello from server again and again and again!');

})


http.listen(process.env.SERVER_PORT, () => {
    console.log('Server started!');

})