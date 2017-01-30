const http = require('http');
const config = {
  port: 3001,
  host: 'localhost'
};
const proxy = require('./proxy')(config);

proxy.start(() => {
  const req = http.request({
    hostname: config.host,
    port: config.port,
    path: '/session',
    method: 'POST'
  }, (res) => {
    res.on('end', () => {
      console.log('lol');
    });
  });
});



