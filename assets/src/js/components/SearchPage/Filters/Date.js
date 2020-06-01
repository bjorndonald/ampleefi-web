import React, { Component } from 'react';
import DropDown from './../../_util/DropDown';

export class Date extends Component {
    render() {
        const datesData = {
            display : 'ALL DATES',
            options: [
                'ALL DATES',
                'TODAY',
                'THIS WEEKEND',
                'THIS MONTH'
            ]
        }
        return (
            <div className="date filter">
                <p className="filter-title">DATE <i className="fa fa-caret-down"></i></p>
                <div className="filter-content">
                    <DropDown data = {datesData}/>
                </div>        
            </div>
        )
    }
}

export default Date
