'use strict';

import React from 'react';
import ZpoolListContainer from '../containers/ZpoolListContainer'

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item is-brand">ZDUX-UI</a>
                    </div>
                    <div className="nav-right nav-menu">
                        <a className="nav-item">Zpools</a>
                        <a className="nav-item">ZFS</a>
                    </div>
                </nav>
                <section className="section">
                    <div className="container">
                        <ZpoolListContainer></ZpoolListContainer>
                    </div>
                </section>
            </div>
        )
    }
}
export default App;
