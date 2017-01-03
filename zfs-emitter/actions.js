'use strict';

const MNTTAB_FILE_CHANGED = 'MNTTAB_FILE_CHANGED';
const mountTabFileChanged = () => {
  return {
    type: MNTTAB_FILE_CHANGED
  }
}

module.exports = {
  MNTTAB_FILE_CHANGED,
  mountTabFileChanged
}
