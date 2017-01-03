let {MNTTAB_FILE_CHANGED} = require('../actions/mntTab');

module.exports = function(state = {}, action) {
  switch(action.type) {
    case MNTTAB_FILE_CHANGED:
      return Object.assign({}, state, {mntTabFileChanged: true})
      break;
    default:
      return state;
  }
}
