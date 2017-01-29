'use strict'

import React from 'react';

class ServerList extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.props.getServers();
    }

    render() {
        let {servers} = this.props;

        let tableRows = servers.map((server) => {
            return (
                <tr key={`${server.hostname}`}>
                    <td>{server.hostname}</td>
                    <td>{server.numCPU}</td>
                    <td>{server.freeMemoryGiB}</td>
                    <td>{server.totalMemoryGiB}</td>
                    <td>{`${server.osType} ${server.osRelease} ${server.osArch} `}</td>
                    <td>{server.uptime}</td>
                </tr>
            )
        })
        return (
            <div>
                <h1 className="title">Server List</h1>
                <hr></hr>
                <table className="table is-striped">
                    <thead>
                        <tr>
                            <th>Server</th>
                            <th>CPUs</th>
                            <th>Free Memory (GB)</th>
                            <th>Total Memory (GB)</th>
                            <th>OS</th>
                            <th>Uptime</th>
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

export default ServerList;
