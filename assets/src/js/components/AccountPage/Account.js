import React, { Component } from 'react';
import NavMain from './../_layout/NavMain';
import LeftBar from './LeftBar';
import RightBar from './RightBar'
import './account.module.scss';

export class Account extends Component {
    render() {
        return (
            <div id="account">
                <NavMain />
                <div className="wrapper body">
                    <LeftBar />
                    <RightBar />
                </div>
            </div>
        )
    }
}

export default Account
