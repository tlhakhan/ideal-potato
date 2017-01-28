'use strict';

let router = require('express').Router();
let store = require('./store');

router.route('/list').get(function(req,res) {
  res.json(store.get('ZPOOL_LIST'));
});

router.route('/dataset').get(function(req,res) {
  let {name} = req.query;
  res.json(store.get('ZPOOL_DATASETS')[name])
});

router.route('/datasets').get(function(req,res) {
  res.json(store.get('ZPOOL_DATASETS'));
});

module.exports = router;
