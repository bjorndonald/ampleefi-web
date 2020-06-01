import React, { Component } from 'react'
import { CheckBox } from '../_util/CheckBox';
import DropDown from './../_util/DropDown';

export class TopFilter extends Component {
    render() {
        const countryData = {
            display : 'NIGERIA',
            options: [
                'NIGERIA',
            ]
        }

        const dateData = {
            display : 'ALL DATES',
            options: [
                'TODAY'
            ]
        }

        return (
            <div className="top-filter">
                <div className="container">
                    <ul className="left">
                        <li><CheckBox title="EVENTS" id="events"/></li>
                        <li><CheckBox title="MOVIES" id="movies"/></li>
                    </ul>
                    <ul className="right">
                        <span><DropDown data={countryData}/></span>
                        <span><DropDown data={dateData}/></span>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopFilter
