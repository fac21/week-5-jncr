const express = require('express');
const home = require("./routes/home.js");

const server = express();

server.get("/", home.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});