'use strict';

let NodeCache = require('node-cache');
let zfsCache = new NodeCache();

// start the mntTab watcher
zfsCache.set('filesystems', {
    name: 'clusters/vmgr'
});

let mountTabWatcher = fs.watch('/etc/mnttab', {
    enconding: 'utf-8'
});

mountTabWatcher.on('change', function(eventType) {
    // mount tab file changed, execute zfs get all
    console.log('the mnttab file changed');
});

process.send(zfsCache.get('filesystems'));
