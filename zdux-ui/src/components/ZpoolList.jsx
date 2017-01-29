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
        let tableRows = zpools.map((zpool) => {
            return (
                <tr>
                    <td>{zpool.name}</td>
                    <td>{zpool.allocated / (1024 * 1024 * 1024) | 0}</td>
                    <td>{zpool.free / (1024 * 1024 * 1024) | 0}</td>
                    <td>{zpool.size / (1024 * 1024 * 1024) | 0}</td>
                    <td>{zpool.capacity}%</td>
                    <td>{zpool.fragmentation}</td>
                </tr>
            )
        })
        return (
            <div>
                <h1 className="title">Zpool List:</h1>
                <hr></hr>
                <table className="table is-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Allocated (GB)</th>
                            <th>Free (GB)</th>
                            <th>Total (GB)</th>
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
