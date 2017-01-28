import 'whatwg-fetch';

const serverList = ['smos-00', 'smos-10'];

export const getZpools = () => {
    return function(dispatch, getState) {
        let promises = [];
        for (let server of serverList) {
            promises.push(fetch(`http://${server}:8008/zpool/datasets`).then((resp) => resp.json()).then((json) => {
                dispatch(gotZpools(json));
            }).catch(function(err) {
                console.log(`error talking to ${server}`, err);
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
