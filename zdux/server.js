'use strict';

let express = require('express');
let compression = require('compression');

let server = express();
let zfs = require('./routers/zfs');

server.use(compression());
server.use('/zfs', zfs);
server.get('/', function(req,res) {
  res.send('hi')
})
server.listen(8080);
