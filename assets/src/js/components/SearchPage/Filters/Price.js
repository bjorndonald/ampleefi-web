import React, { Component } from 'react';
import Slider from './../../_util/Slider';

export class Price extends Component {
    render() {
        return (
            <div className="price filter">
                <p className="filter-title">PRICE</p>
                <div className="filter-content">
                    <Slider />
                </div>
            </div>
        )
    }
}

export default Price
