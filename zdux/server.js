'use strict';

let express = require('express');
let compression = require('compression');

let server = express();
let zfs = require('./routers/zfs');
let zpool = require('./routers/zpool');
let mnttab = require('./routers/mnttab');
let sysinfo = require('./routers/sysinfo');

server.use(compression());
server.use('/zfs', zfs);
server.use('/zpool', zpool);
server.use('/mnttab', mnttab);
server.use('/sysinfo', sysinfo);

server.listen(8080);
