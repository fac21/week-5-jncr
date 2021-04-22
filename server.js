const express = require('express');
const newUser = require('./routes/new-user.js')
const home = require("./routes/home.js");

const server = express();

server.get("/", home.get);

const bodyParser = express.urlencoded();

server.get("/new-user", newUser.newUser);
server.post("/new-user", bodyParser, newUser.post);


const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});