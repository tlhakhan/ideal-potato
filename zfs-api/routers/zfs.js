'use strict';

let router = require('express').Router();

router.route('/:zpool/list').get((req,res) => {
  if(req.params.zpool) {
    res.send('zfs list')
  } else {
    res.status(404).send();
  }
})

module.exports = router;
