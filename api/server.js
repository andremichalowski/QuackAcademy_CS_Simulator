const express = require("express"); 
const questionsProuter = require('../routers/questionsP-router.js');

const server = express();
server.use(express.json());

server.use('/api/questionsP', questionsProuter);

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;