const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('HI <3')
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});