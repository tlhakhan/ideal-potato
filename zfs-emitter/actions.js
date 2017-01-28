'use strict';

const MNTTAB_FILE_CHANGED = 'MNTTAB_FILE_CHANGED';
const mountTabFileChanged = () => {
  return (dispatch) => {
    // dispatch an event that that mnttab file changed
    dispatch({type: MNTTAB_FILE_CHANGED});
    return dispatch()
  }
}

module.exports = {
  MNTTAB_FILE_CHANGED,
  mountTabFileChanged
}
