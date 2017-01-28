'use strict';

let router = require('express').Router();
let store = require('./store');

router.route('/list').get(function(req,res) {
  res.json(store.get('ZFS_LIST'));
});

router.route('/dataset').get(function(req,res) {
  let {name} = req.query;
  res.json(store.get('ZFS_DATASETS')[name])
});

router.route('/datasets').get(function(req,res) {
  res.json(store.get('ZFS_DATASETS'));
});

router.route('/snapshots').get(function(req,res) {
  res.json(store.get('ZFS_SNAPSHOTS'));
});

router.route('/filesystems').get(function(req,res) {
  res.json(store.get('ZFS_FILESYSTEMS'));
});

router.route('/volumes').get(function(req,res) {
  res.json(store.get('ZFS_VOLUMES'));
});

router.route('/clones').get(function(req,res) {
  res.json(store.get('ZFS_CLONES'))
});

module.exports = router;
