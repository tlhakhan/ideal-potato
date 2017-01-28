'use strict';

let express = require('express');
let cp = require('child_process');
let compression = require('compression');
let zfsService = cp.fork('./services/zfs-service');

let server = express();
let zfs = require('./routers/zfs', zfsService);

server.use(compression());
server.use('/zfs', zfs);
server.listen(8080);