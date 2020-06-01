import React, { Component } from 'react';
import NavMain from './../_layout/NavMain';
import { Footer } from './../_layout/Footer';
import Header from './Header';
import Info from './Info';
import Tags from './Tags'
import './event.module.scss';
import { MapContent } from './MapContent';

export class EventPage extends Component {
    render() {
        return (
            <div id="event">
                <NavMain />
                <Header tip="5" title="Lagos Fashion Week"/>
                <Tags />
                <Info />
                {/* <MapContent /> */}
                <Footer />
            </div>
        )
    }
}

export default EventPage
