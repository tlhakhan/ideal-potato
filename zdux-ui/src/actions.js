import 'whatwg-fetch';

const serverList = ['smos-00', 'smos-10'];

export const GET_ZPOOLS = 'GET_ZPOOLS';
export const getZpools = () => {
    return function(dispatch, getState) {
        dispatch({
            type: GET_ZPOOLS
        }); // signal - empty out existing zpools data
        let promises = [];
        for (let server of serverList) {
            promises.push(fetch(`http://${server}:8008/zpool/datasets`)
                .then((resp) => resp.json())
                .then((json) => {
                    dispatch(gotZpools(json, server));
                }).catch(function(err) {
                    console.log(`Error talking to ${server}:`, err);
                }));
        }
        return Promise.all(promises);
    }
}

export const GOT_ZPOOLS = 'GOT_ZPOOLS';
export function gotZpools(zpools) {
    return {
        type: GOT_ZPOOLS,
        zpools
    }
}

export const GET_SERVERS = 'GET_SERVERS';
export const getServers = () => {
    return function(dispatch, getState) {
        dispatch({
            type: GET_SERVERS
        }); // signal - empty out existing servers data
        let promises = [];
        for (let server of serverList) {
            promises.push(fetch(`http://${server}:8008/sysinfo`)
                .then((resp) => resp.json())
                .then((json) => {
                    dispatch(gotServers(json));
                }).catch(function(err) {
                    console.log(`Error talking to ${server}:`, err);
                }));
        }
        return Promise.all(promises);
    }
}

export const GOT_SERVERS = 'GOT_SERVERS';
export function gotServers(server) {
  return {
    type: GOT_SERVERS,
    server
  }
}
