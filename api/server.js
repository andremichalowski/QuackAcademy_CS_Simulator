const express = require("express"); 
const questionsRouter = require('../routers/questions-router.js');

const server = express();
server.use(express.json());

server.use('/api/questions/', questionsRouter);


server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;