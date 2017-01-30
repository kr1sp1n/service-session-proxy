const http = require('http');

module.exports = (config) => {
  const { port } = config;
  const server = http.createServer();
  server.start = () => {
    server.listen(port, host);
  };
  return server;
};
