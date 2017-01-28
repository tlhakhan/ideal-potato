'use strict';
let cp = require('child_process'),
    spawn = cp.spawn;
let EventEmitter = require('events').EventEmitter;

class ExecDaemon extends EventEmitter {
    constructor(options) {
        super();
        this.cmd = options.cmd;
        this.args = options.args;

        this.interval = options.interval ? options.interval * 1000 : null;

        this.sleeping = true; // avoid starting another timer
        this.halted = false; // control for non-zero exit code

        // start execution of the command
        this.timer = setInterval(execute, this.interval, this);
    }
}

// exec method
let execute = function(daemon) {
    if (daemon.sleeping && !daemon.halted) {
        daemon.sleeping = false;
        console.log('Executing %s', daemon.cmd);

        let zfs = spawn(daemon.cmd, daemon.args);
        let output = '';
        let error = '';

        zfs.stdout.on('data', function(data) {
            output = output.concat(data);
        });

        zfs.stderr.on('data', function(data) {
            error = error.concat(data);
        });

        zfs.on('close', function(code) {
            if (code == 0) {
                daemon.halted = false;
                daemon.sleeping = true;
                daemon.emit('done', output.trim());
            } else {
                // error has occured
                daemon.halted = true; // broken state
                daemon.sleeping = false;
                daemon.emit('error', error.trim())
            }
        });
    }
}

module.exports = ExecDaemon;
