import React, { Component} from 'react';
import  Ball  from "./Ball";
import $ from 'jquery';
import {Link} from "react-router-dom";
import EventPage  from "./../EventPage/EventPage";
import Token from './Token';
export class SimpleEvent extends Component {
    constructor(props){
        super(props);
        this.bottom=null;
        if(this.props.type=="event"){
            this.bottom=<small>{this.props.location} 
                                <Ball size={4} color="#707070"/>
                                {this.props.date}
                            </small>;
            
        }

        this.link=<Link to={`/event:${this.props.id}`}><img src="static/src/img/right_arrow.png"  /></Link>
        if(this.props.type =="movie"){
            this.link = <Link to={`/movie:${this.props.id}`}><img src="static/src/img/right_arrow.png"/></Link>
        }
    }

    showOverlay(e){
        //console.log(document);
        $(e.target).parent().find('#overlay').fadeIn();
        //e.target.parentElement.find('overlay')
        //.getElementById('overlay').style.display = "flex";
    }

    endOverlay(e){
        //console.log(e.target);
        $(e.target).parent().parent().find('#overlay').fadeOut();
        //e.target.parentElement.find('overlay')
        //.getElementById('overlay').style.display = "flex";
    }

    render() { 
        return (
                <div className="event">
                    <div className="top" id={`img_${this.props.id}`} onMouseEnter={(e) => this.showOverlay(e)}
                    onMouseLeave={(e) => this.endOverlay(e)}>
                        <div id="overlay">
                            <div className="inner">
                                {/* <Link to='/event'><img src="static/src/img/right_arrow.png"  /></Link> */}
                                {this.link}
                            </div>
                        </div>
                        <img id={`img_${this.props.id}`} src={`/static/src/img/${this.props.tip}.jpg`}/>
                        <span class="event-price"><Token />{this.props.price}</span> 
                    </div>
                    <h4>{this.props.title}</h4>
                    <small>{this.bottom}
                    </small>
                    
                </div>
        )
    }
}

export default SimpleEvent
