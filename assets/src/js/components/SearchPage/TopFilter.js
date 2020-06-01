import React, { Component } from 'react'
import { CheckBox } from '../_util/CheckBox';
import DropDown from './../_util/DropDown';
import $ from 'jquery';

export class TopFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieCheck: true,
            eventCheck: true,
            done: true
        }
        this.onMovieClick = this.onMovieClick.bind(this);
        this.onEventClick = this.onEventClick.bind(this);
    }

    onMovieClick(){
        this.setState({
            movieCheck: !this.state.movieCheck,
            done: false
        }, function(){
            console.log('f');
            this.setState({
                done: true
            })
        })
    }

    onEventClick(){
        console.log('f');
        this.setState({
            eventCheck: !this.state.eventCheck,
            done: false
        }, function(){
            this.setState({
                done: true
            })
        })
    }

    filterShow(){
        $('section.filter-section').slideToggle();
    }

    render() {
        const sortData = {
            display : 'Sort By',
            options: [
                'Price Low to High',
                'Lagos',
                'Warri',
                'Port Harcourt'
            ]
        } 

        return (
            <div className="top-filter">
                <h1 className="filter-title" onClick={this.filterShow}>FILTER BY </h1>
                <div className="container">
                    <div className="wrapper">
                        <div className="title-div"><h2>FILTER BY </h2></div>
                        <ul className="left">
                            <li><CheckBox title="EVENTS" id="events" lclick={this.onEventClick} 
                                    click={this.onEventClick} checked = {this.state.eventCheck}/></li>
                            <li><CheckBox title="MOVIES" id="movies" lclick={this.onMovieClick} click={this.onMovieClick} 
                                checked = {this.state.movieCheck}/></li>
                        </ul>
                        <ul className="right">
                            <span><DropDown data={sortData}/></span>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopFilter
