// Import required modules
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to WEBELIGHT!');
});

// Set the port number
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

