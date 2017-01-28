'use strict';

let _ = require('lodash');
let ExecDaemon = require('../../lib/exec-daemon');

let zfsD = new ExecDaemon({
    cmd: '/usr/sbin/zfs',
    args: ['get', '-Hrp', '-t', 'all', '-o', 'name,property,value', 'aclinherit,aclmode,atime,available,canmount,casesensitivity,checksum,clones,compression,compressratio,copies,creation,dedup,defer_destroy,devices,exec,logbias,logicalreferenced,logicalused,mounted,mountpoint,nbmand,normalization,origin,primarycache,quota,readonly,recordsize,redundant_metadata,refcompressratio,referenced,refquota,secondarycache,setuid,sharenfs,sharesmb,snapdir,sync,type,used,usedbychildren,usedbydataset,usedbyrefreservation,usedbysnapshots,userrefs,utf8only,version,volblocksize,volsize,vscan,written,xattr,zoned,name'],
    interval: 5
});

zfsD.on('done', function(output) {
  let datasets = parseZfsOutput(output)

    process.send({
      type: 'ZFS_LIST',
      data: Object.keys(datasets)
    });

    process.send({
        type: 'ZFS_DATASETS',
        data:datasets
    });

    process.send({
      type: 'ZFS_FILESYSTEMS',
      data: _.values(datasets).filter(function(ds) {
        return (ds.type === 'filesystem')
      })
    })

    process.send({
      type: 'ZFS_VOLUMES',
      data: _.values(datasets).filter(function(ds) {
        return (ds.type === 'volume')
      })
    })

    process.send({
      type: 'ZFS_SNAPSHOTS',
      data: _.values(datasets).filter(function(ds) {
        return (ds.type === 'snapshot')
      })
    })

    process.send({
      type: 'ZFS_CLONES',
      data: _.values(datasets).filter(function(ds) {
        return (ds.origin !== '' && (ds.type === 'filesystem' || ds.type === 'volume'))
      })
    })
});

zfsD.on('error', function(err) {
    console.log(err);
});

// zfs parser
function parseZfsOutput(output) {
    let datasets = {};
    // parse the dataset
    for (let line of output.split(/\n/)) {
        let words = line.split(/\t/);

        let value = Number(words[2]);

        // this logic is for converting - to string equivalent of empty string.
        // this is to avoid having property values, clones:0 or defer_destroy:0
        if (words[2] === '-') {
            value = '';
        } else if (isNaN(value)) {
            value = words[2];
        }

        if (!datasets[words[0]]) {
            Object.assign(datasets, {
                [words[0]]: {
                    [words[1]]: value
                }
            });
        } else {
            Object.assign(datasets[words[0]], {
                [words[1]]: value
            });
        }
    }
    // reduce it to an array and return
    return datasets;
}
