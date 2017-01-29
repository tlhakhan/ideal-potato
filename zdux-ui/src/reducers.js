import {
    GOT_ZPOOLS,
    GET_ZPOOLS,
    GET_SERVERS,
    GOT_SERVERS
} from './actions';

function appStore(state = {
    zpools: [],
    servers: []
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
        case GET_SERVERS:
          return Object.assign({}, state, {
            servers: []
          });
        case GOT_SERVERS:
          return Object.assign({}, state, {
            servers: state.servers.concat(action.server)
          })
        default:
            return state;
    }
}

export default appStore;
