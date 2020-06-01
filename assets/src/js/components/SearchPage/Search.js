import React, { Component } from 'react';
import Header from './Header';
import NavMain from './../_layout/NavMain';
import Footer from './../_layout/Footer';
import Content from './Content';
import TopFilter from './TopFilter';
import './search.module.scss';

export class Search extends Component {
    render() {
        return (
            <div id="search">
                <NavMain/>
                <TopFilter />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Search
