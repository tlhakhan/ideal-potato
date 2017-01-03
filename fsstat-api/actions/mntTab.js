'use strict'

let fs = require('fs');

// actions
const MNTTAB_FILE_CHANGED = 'MNTTAB_FILE_CHANGED';
let mountTabFileChanged = function() {
  return {
    type: MNTTAB_FILE_CHANGED
  }
}

module.exports = {
   MNTTAB_FILE_CHANGED,
   mountTabFileChanged
};
