'use strict';

import {
  connect
} from 'react-redux';

import ZpoolList from '../components/ZpoolList.jsx';

import {
  getZpools
} from '../actions';

function mapStateToProps(state) {
  return {
    zpools: state.zpools
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getZpools : () => dispatch(getZpools())
  }
}

const ZpoolListContainer = connect(mapStateToProps, mapDispatchToProps)(ZpoolList)
export default ZpoolListContainer;
