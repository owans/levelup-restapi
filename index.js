const config = require('./config')();
const { createServer } = require('http');
const app = require('./app')();
const port = config.PORT || 3001;

const server = createServer(app);

server.listen(port, () => console.log(`Server is listening on ${port}`));