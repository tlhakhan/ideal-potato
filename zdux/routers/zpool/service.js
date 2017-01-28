'use strict';

let _ = require('lodash');
let ExecDaemon = require('../../lib/exec-daemon');
let {
    zpoolOutputParser
} = require('../../lib/parser');

let zpoolD = new ExecDaemon({
    cmd: '/usr/sbin/zpool',
    args: ['get', '-Hp', '-o', 'name,property,value', 'name,size,capacity,health,guid,cachefile,failmode,listsnapshots,free,allocated,readonly,comment,freeing,fragmentation'],
    interval: 5
});

zpoolD.on('done', function(output) {
    let datasets = zpoolOutputParser(output)

    process.send({
        type: 'ZPOOL_LIST',
        data: Object.keys(datasets)
    });

    process.send({
        type: 'ZPOOL_DATASETS',
        data: _.values(datasets)
    });

});

zpoolD.on('error', function(err) {
    console.log(err);
});
