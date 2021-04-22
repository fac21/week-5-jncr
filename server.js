const express = require('express');
const newUser = require('./routes/new-user.js')
const server = express();

server.get('/', (req, res) => {
    res.send('HI <3')
});

const bodyParser = express.urlencoded();

server.get("/new-user", newUser.newUser);
server.post("/new-user", bodyParser, newUser.post);


const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});