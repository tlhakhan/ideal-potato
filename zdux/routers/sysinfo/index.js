'use strict'

let router = require('express').Router();
let {
    serverType
} = require('../../config');
let os = require('os');

router.route('').get(function(req, res) {
    res.json({
        programName: 'batfs-api',
        hostname: os.hostname(),
        numCPU: os.cpus().length,
        freeMemoryGiB: Math.round(os.freemem() / (1024 * 1024 * 1024)),
        totalMemoryGiB: Math.round(os.totalmem() / (1024 * 1024 * 1024)),
        osType: os.type(),
        osArch: os.arch(),
        osPlatform: os.platform(),
        osRelease: os.release(),
        osType: os.type(),
        networkInterfaces: os.networkInterfaces(),
        uptime: os.uptime(),
        serverType
    });
});

module.exports = router;
