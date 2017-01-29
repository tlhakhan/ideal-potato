'use strict';

import {
  connect
} from 'react-redux';

import ServerList from '../components/ServerList.jsx';

import {
  getServers
} from '../actions';

function mapStateToProps(state) {
  return {
    servers: state.servers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getServers : () => dispatch(getServers())
  }
}

const ServerListContainer = connect(mapStateToProps, mapDispatchToProps)(ServerList)
export default ServerListContainer;
