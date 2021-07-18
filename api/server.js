const express = require("express"); 
const questionsProuter = require('../routers/questionsP-router.js');

// //path
// const path = require('path')

const server = express();
server.use(express.json());

server.use('/api/questionsP', questionsProuter);

// //static 1
// server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

// //static 2
// server.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// })

module.exports = server;