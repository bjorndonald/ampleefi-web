import React, { Component } from 'react';
import PopularEvent from './../_util/PopularEvent'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="popular-events">
                    <PopularEvent tip="2" type="event"/>
                    <PopularEvent tip="3" type="movie"/>
                    <PopularEvent tip="4" type="event"/>
                    <PopularEvent tip="5" type="movie"/>
                </div>
            </header>
        )
    }
}

export default Header
