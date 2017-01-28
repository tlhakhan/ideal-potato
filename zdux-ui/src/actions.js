import 'whatwg-fetch';

const serverList = ['smos-00'];

export const getZpools = () => {
  return function(dispatch, getState) {
    return fetch('http://smos-00:8008/zpool/datasets').then((resp) => resp.json()).then((json) => {
      dispatch(gotZpools(json));
    })
  }
}

export const GOT_ZPOOLS = 'GOT_ZPOOLS';
export function gotZpools(zpools) {
  return {
    type: GOT_ZPOOLS,
    zpools
  }
}
