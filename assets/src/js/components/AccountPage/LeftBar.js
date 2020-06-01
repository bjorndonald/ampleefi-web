import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import Links from './Links';

export class LeftBar extends Component {
    render() {
        return (
            <div className="left">
                <ProfilePic />
                <Links />
            </div>
        )
    }
}

export default LeftBar
