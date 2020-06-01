import React, { Component } from 'react'
import { Link } from "react-router-dom";
import $ from 'jquery';
import Token from './Token';

export class BasicEvent extends Component {
    constructor(props) {
        super(props);
        this.backgroundImage = `/static/src/img/event_${this.props.tip}.webp`;
        if(this.props.type=="movie"){
            this.backgroundImage = `/static/src/img/movie_${this.props.tip}.webp`;
        }
    }
    overlay(e) {
        $(e.target).parent().find('#overlay').css('display', 'flex');
    }

    removeOverlay(e) {
        console.log($(e.target));
        $(e.target).parent().parent().find('#overlay').css('display', 'none');
    } 



    render() { 
        const styles={
            backgroundImage: `url(${this.backgroundImage})`
        }
        return (
            <div className="event">
                <img style={styles} />
                <div className="event-info">
                    <h1>{this.props.title}</h1>
                    <div className="event-bottom">
                        <div className="left">
                            <p>From:</p>
                            <h2>&#8358;{this.props.price}</h2>
                        </div>
                        <div className="right">
                            <a className="btn btn-buy">Get Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default BasicEvent
