let fs = require('fs');

let mountTabPath = '/etc/mnttab';
let mountTabWatcher = fs.watch(mountTabPath);
let mounts = [];
let queueMountTabRead = true;

// utility functions
function parseMountTabData(data) {
    let newMounts = [];
    let lines = data.split(/\n/);
    lines.forEach(function(line) {
        let fields = line.split(/\t/);
        if (fields.length === 5) {
            newMounts.push({
                name: fields[0],
                mountPath: fields[1],
                fsType: fields[2],
                mountOptions: fields[3].split(/,/),
                mountTime: fields[4]
            });
        }
    });
    return newMounts;
}

mountTabWatcher.on('change', function(eventType) {
    queueMountTabRead = true;
});

setInterval(function() {
    if (queueMountTabRead) {
        fs.readFile(mountTabPath, 'utf-8', function(err, data) {
            mounts = parseMountTabData(data);
            console.log(mounts);
            queueMountTabRead = !queueMountTabRead;
        });
    }
}, 5000);
