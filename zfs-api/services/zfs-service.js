'use strict';

let NodeCache = require('node-cache');
let zfsCache = new NodeCache();

// start the mntTab watcher
zfsCache.set('filesystems', {});
let mountTabWatcher = fs.watch('/etc/mnttab', {enconding: 'utf-8'});

mountTabWatcher.on('change', function(eventType) {
  // mount tab file changed, execute zfs get all

});

module.exports = zfsCache;
