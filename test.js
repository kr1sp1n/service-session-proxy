const http = require('http');
const config = {
  port: 3001
};
const proxy = require('./proxy')(config);

proxy.start(() => {
  const req = http.request({
    hostname: 'localhost',
    port: config.port,
    path: '/session',
    method: 'POST'
  }, (res) => {
    res.on('end', () => {
    });
  });
});



