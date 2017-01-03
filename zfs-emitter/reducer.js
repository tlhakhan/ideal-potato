'use strict';

let {MNTTAB_FILE_CHANGED} = require('./actions');

function reducer(state= {}, action) {
  switch(action.type) {
    case MNTTAB_FILE_CHANGED:
      console.log(MNTTAB_FILE_CHANGED);
      return Object.assign({}, state, {mountTabFileChangedTime: Date.now()});
    default:
      return state;
  }
}

module.exports = reducer;
