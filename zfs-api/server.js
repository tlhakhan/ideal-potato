'use strict';

let express = require('express');
let compression = require('compression');
let zfsService = require('./services/zfs-service');

let server = express();
let zfs = require('./routers/zfs', zfsService);
server.use(compression());
server.use('/zfs', zfs);
server.listen(8080);
