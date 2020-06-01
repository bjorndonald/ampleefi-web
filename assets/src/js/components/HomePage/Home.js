import React, { Component, Fragment } from 'react';
import NavMain from './../_layout/NavMain';
import TopFilter from './TopFilter';
import Footer from './../_layout/Footer';
import { Header } from "./Header";
import { Content } from "./Content";
import './style.module.scss';
export class Home extends Component {
    // componentDidMount() {
    //     browserHistory.push('/');
    //   }
    render() {
        return ( 
            <div id="home">
                <NavMain theme="black" />
                {/* <TopFilter /> */}
                <Header />
                <Content />
                <Footer /> 
            </div>
        )
    }
}

export default Home

