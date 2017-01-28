'use strict'

import React from 'react';

class ZpoolList extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.getZpools();
  }
  render() {
    let {zpools} = this.props;
    return(<h1>Zpool List: {JSON.stringify(zpools)}</h1>)
  }
}

export default ZpoolList;
