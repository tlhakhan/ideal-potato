
'use strict';

let express = require('express');
let api = require('./routers/api');
let server = express();

server.use('/api', api);

server.listen(8080, function() {
  console.log('server started on 8080');
});
