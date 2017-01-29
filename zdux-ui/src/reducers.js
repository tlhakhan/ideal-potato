import {
    GOT_ZPOOLS,
    GET_ZPOOLS
} from './actions';

function appStore(state = {
    zpools: []
}, action) {
    switch (action.type) {
        case GET_ZPOOLS:
          return Object.assign({}, state, {
            zpools: []
          });
        case GOT_ZPOOLS:
            return Object.assign({}, state, {
                zpools: state.zpools.concat(action.zpools)
            });
        default:
            return state;
    }
}

export default appStore;
