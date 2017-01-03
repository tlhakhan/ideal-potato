
'use strict';

let {createStore} = require('redux');
let mntTab = require('../reducers/mntTab');
let mntTabStore = createStore(mntTab)

let fs = require('fs');
const mountTabPath = '/etc/mnttab';
const mountTabWatcher = fs.watch(mountTabPath, {encoding: 'utf-8'});
let { mountTabFileChanged } = require('../actions/mntTab');

mountTabWatcher.on('change', function(eventType) {
  // the /etc/mnttab file changed
  mntTabStore.dispatch(mountTabFileChanged());
});

let api = require('express').Router();

api.route('/list').get((req, res) => {
  res.send(mntTabStore.getState());
});

module.exports = api;
