let fs = require('fs');
let mountTabWatcher = fs.watch('/etc/mnttab');
let ExecDaemon = require('../../lib/exec-daemon');

let {mnttabFileParser} = require('../../lib/parser');

let mnttabD = new ExecDaemon({
    cmd: '/usr/bin/cat',
    args: ['/etc/mnttab'],
    interval: 5
});

mnttabD.on('done', function(output) {
  output = mnttabFileParser(output);
  process.send({
    type: 'MNTTAB_ENTRIES',
    data: output
  });
  process.send({
    type: 'MNTTAB_LIST',
    data: output.map((i) => i.name)
  })
});

mnttabD.on('error', function(error) {
  console.log(error);
});
