import React, { Component } from 'react';
import DropDown from './../../_util/DropDown';

export class Artists extends Component {
    render() {
        const artistData = {
            display : 'NIGERIA',
            options: [
                'ALL DATES',
                'TODAY',
                'THIS WEEKEND',
                'THIS MONTH'
            ]
        }
        return (
            <div className="artist">
                {/* <p className="filter-title">ARTIST NAME <i className="fa fa-caret-down"></i></p> */}
                <div className="filter-content">
                    <DropDown data = {artistData} />             
                </div>
            </div>
        )
    }
}

export default Artists
