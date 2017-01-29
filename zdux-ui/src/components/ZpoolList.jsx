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

        let capacityDisplay = (value) => {
            if (value >= 75 && value <= 85) {
                return (
                    <span className="tag is-warning" alt="warning">{value}%</span>
                )
            } else if (value > 85) {
                return (
                    <span className="tag is-danger" alt="danger">{value}%</span>
                )
            } else {
                return (
                    <span className="tag is-success" alt="ok">{value}%</span>
                )
            }
        }

        let healthDisplay = (value) => {
            if (value === 'ONLINE') {
                return (
                    <span className="tag is-success">healthy</span>
                )
            } else {
                return (
                    <span className="tag is-danger">non-optimal</span>
                )
            }
        }

        let tableRows = zpools.map((zpool) => {
            return (
                <tr key={`${zpool.guid}`}>
                    <td>{zpool.server}</td>
                    <td>{zpool.name}</td>
                    <td>{healthDisplay(zpool.health)}</td>
                    <td>{zpool.allocated / (1024 * 1024 * 1024) | 0}</td>
                    <td>{zpool.free / (1024 * 1024 * 1024) | 0}</td>
                    <td>{zpool.size / (1024 * 1024 * 1024) | 0}</td>
                    <td>{capacityDisplay(zpool.capacity)}</td>
                    <td>{zpool.fragmentation}</td>
                </tr>
            )
        })
        return (
            <div>
                <h1 className="title">Zpool List</h1>
                <hr></hr>
                <table className="table is-striped">
                    <thead>
                        <tr>
                            <th>Server</th>
                            <th>Zpool</th>
                            <th>Health</th>
                            <th>Allocated Storage (GB)</th>
                            <th>Free Storage (GB)</th>
                            <th>Total Storage (GB)</th>
                            <th>Utilization (%)</th>
                            <th>Fragmentation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ZpoolList;
