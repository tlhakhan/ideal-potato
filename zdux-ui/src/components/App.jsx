'use strict';

import React from 'react';
import ZpoolListContainer from '../containers/ZpoolListContainer'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>

        <ZpoolListContainer></ZpoolListContainer>
      </div>
    )
  }
}
export default App;
