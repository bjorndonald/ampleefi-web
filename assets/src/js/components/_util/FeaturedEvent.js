import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Token from './Token';

export class FeaturedEvent extends Component {
    constructor(props){
        super(props);
        this.link=<Link to={`/event:${this.props.id}`}><img src="static/src/img/right_arrow.png"  /></Link>
        if(this.props.type =="movie"){
            this.link = <Link to={`/movie:${this.props.id}`}><img src="static/src/img/right_arrow.png"/></Link>
        }
    }
    showOverlay(e){
        console.log(e.target);
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
            <div className="event" id={`img_${this.props.id}`} onMouseEnter={(e) => this.showOverlay(e)}
            onMouseLeave={(e) => this.endOverlay(e)}>
                <div id="overlay">
                    <div className="inner">
                        {/* <Link to='/event'><img src="static/src/img/right_arrow.png"  /></Link> */}
                        {this.link}
                    </div>
                </div>
                <img src={`static/src/img/${this.props.tip}.jpg`} />
                <span class="event-price"><Token />{this.props.price}</span> 
            </div>
        )
    }
}

export default FeaturedEvent
