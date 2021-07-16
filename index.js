require("dotenv").config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 3000;
// const secret = process.env.TEMP_SECRET || 'FOO SECRET'

// console.log(PORT, secret);

server.listen(PORT, () => {console.log(`Server running on localhost:${PORT}`)})
