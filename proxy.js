const http = require('http');

module.exports = (config) => {
  const { port, host } = config;
  const server = http.createServer();
  server.start = () => {
    server.listen(port, host);
  };
  return server;
};
