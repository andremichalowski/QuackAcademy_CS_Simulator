const express = require("express"); 
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;