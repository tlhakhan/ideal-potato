'use strict';

let router = require('express').Router();
let zfsService = cp.fork('./services/zfs-service');

router.route('/:zpool/list').get((req, res) => {
    if (req.params.zpool) {

    } else {
        res.status(404).send();
    }
});

module.exports = router;
