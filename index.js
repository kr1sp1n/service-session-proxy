const config = require('./config')();
const proxy = require('./proxy')(config);

proxy.start();