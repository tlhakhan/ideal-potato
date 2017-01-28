'use strict';

let router = require('express').Router();
let store = require('./store');

router.route('/entries').get(function(req, res) {
    res.json(store.get('MNTTAB_ENTRIES'));
});

router.route('/entry').get(function(req, res) {
    let {
        name
    } = req.query;
    res.json(store.get('MNTTAB_ENTRIES').filter((i) => i.name === name)[0]);
});

module.exports = router;
