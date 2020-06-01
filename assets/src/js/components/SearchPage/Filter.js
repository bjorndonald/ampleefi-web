import React, { Component } from 'react';
import Price from './Filters/Price';
import Date from './Filters/Date';
import Artists from './Filters/Artists';
import EventTags from './Filters/EventTags';

export class Filter extends Component {
    render() {
        return (
            <section className="filter-section">
                {/* <div class="section-header filter-header">
                    <div class="line"></div>
                    <p>FILTER BY</p>
                    <div class="line"></div>
                </div> */}
                <div className="filter-body">
                    <Price />
                    <Date />
                    <Artists />
                    <EventTags />
                </div>
            </section>
        )
    }
}

export default Filter
