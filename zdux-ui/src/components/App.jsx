'use strict';

import React from 'react';
import {Link} from 'react-router';
import ZpoolListContainer from '../containers/ZpoolListContainer'

const FilterLink = ({ filter, children }) => (
  <Link
    activeClass={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <div className="nav-left nav-menu">
                        <Link to="/" activeClassName="is-active" className="nav-item is-brand">ZDUX-UI</Link>
                        <Link to="/servers" activeClassName="is-active" className="nav-item">Servers</Link>
                        <Link to="/zpools" activeClassName="is-active" className="nav-item">Zpools</Link>
                        <Link to="/zfs" activeClassName="is-active" className="nav-item">ZFS</Link>
                    </div>
                </nav>
                <section className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
export default App;
