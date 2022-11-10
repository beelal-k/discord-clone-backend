require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello from server again!');

})


app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started!');

})