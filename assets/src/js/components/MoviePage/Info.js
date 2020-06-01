import React, { Component } from 'react';
import Ticket from './../_util/Ticket'

export class Info extends Component {
    render() {
        return (
            <div className="info">
                <div className="container">
                    <table>
                        <thead>
                            <th>About</th>
                            <th>All Tickets</th>
                        </thead>
                        <tbody> 
                            <tr>
                                <td>See Burnaboy Live</td>
                                <td className="inner">
                                    <td>JAN 20</td>
                                    <td>7 PM</td>
                                    <td>Lagos, Nigeria</td>
                                    <td>REG</td>
                                    <td>5000</td>
                                    <td><a><Ticket /></a></td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Info
