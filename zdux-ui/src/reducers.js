import {
    GOT_ZPOOLS
} from './actions';

function appStore(state = {
    zpools: []
}, action) {
    switch (action.type) {
        case GOT_ZPOOLS:
            return Object.assign({}, state, {
                zpools: state.zpools.concat(action.zpools)
            });
        default:
            return state;
    }
}

export default appStore;
