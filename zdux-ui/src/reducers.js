
import {
  GOT_ZPOOLS
} from './actions';

function appStore(state = {}, action) {
    switch (action.type) {
        case GOT_ZPOOLS:
            return Object.assign({}, state, {
                zpools: action.zpools
            });
        default:
            return state;
    }
}

export default appStore;
