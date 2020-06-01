import React, { Component } from 'react';
import NavMain from './../_layout/NavMain';
import { Footer } from './../_layout/Footer';
import Header from './Header';
import Info from './Info';
import Tags from './Tags'
import './movie.module.scss';

export class MoviePage extends Component {
    render() {
        return (
            <div id="movie">
                <NavMain />
                <Header tip="4"/>
                <Tags />
                <Info />
                <Footer />
            </div>
        )
    }
}

export default EventPage
