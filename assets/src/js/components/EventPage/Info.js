import React, { Component } from 'react';
import Ticket from './../_util/Ticket'

export class Info extends Component {
    render() {
        return (
            <div className="info">
                <div className="wrapper">
                    <div className="table">
                        <div className="headers">
                            <h1>About</h1>
                            <h1>All Tickets</h1>
                        </div>
                        <div className="body"> 
                            <div className="row">
                                <div className="name">See Burnaboy Live</div>
                                <ul className="inner">
                                    <li className="time"><p>Thur 7:00 PM</p>
                                        <p>JAN 20</p></li> 
                                    <li className="address"><p>Lagos, Nigeria</p>
                                        <p>Lagos, Nigeria</p></li>
                                    <li className="ticket-options">
                                        <ul>
                                            <li>
                                                <p>Regular</p>
                                                <p>5000</p>
                                            </li>
                                            <li>
                                                <p>Regular</p>
                                                <p>5000</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="provider-icon"><p><a><img src="/static/src/img/nairabox_logo.png"/></a></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
