import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import Search from './../_util/Search';
import User from './../_util/User';
import UserDropDown from './../_util/UserDropDown';
import Ticket, { Token } from './../_util/Token';
import $ from "jquery";

export class NavMain extends Component {
    constructor(props){
        super(props);
    }

    
    render() {
        const styles = {
            color: this.theme
        } 

        const userData = {
            display : 'Sort By',
            options: [
                'MY ACCOUNT',
                'LOG OUT'
            ]
        }

        return ( 
            <Fragment>
                <nav>
                    <div className="container">
                        <ul className="left">
                            <div className="logo">
                                <h3>AmpleeFi</h3>
                                <img className="mobile-logo" src="/static/src/img/mobile_logo.png" />
                            </div>
                            <form className="search">
                                <Search />
                                <input type="text" placeholder=""/>
                            </form>
                        </ul>
                        <ul className="right">
                            <li className="nav-ticket"><Token /></li> 
                            <li className="nav-user"><UserDropDown data = {userData} /></li>
                            <li className="nav-login"><User /> <span>Log In</span></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default withRouter(NavMain)
