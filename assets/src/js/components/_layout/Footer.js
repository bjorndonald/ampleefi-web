import React, { Component } from 'react';
import SlidePopUp from './../_util/SlidePopUp';
import Suggestion from './Suggestion';
import $ from 'jquery'

export class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            click: true,
            done: true
        }
        this.suggestClick = this.suggestClick.bind(this);
        this.suggestClose = this.suggestClose.bind(this);
    }

    suggestClick(){
        this.setState({
            click: true,
            done: false
        }, function(){
            
            this.setState({
                done: true
            })
        });
        
    }

    suggestClose(){
        this.setState({
            click: false,
            done: false
        }, function(){
            this.setState({
                done: true
            });
        });
    }

    render() {
        return (
            <footer>
                {/* <h2>If you can't find an event or movie ticket,  */}
                    {/* make a suggestion and get <span>10%</span> off !!! </h2> */}
                {/* <div className= "suggestion">
                    <div className="container">
                        <a className="btn btn-white-transparent">Make a suggestion</a>
                    </div>
                </div> */}
                <div className= "footer">
                    <div className="wrapper">
                        <div className="left">
                            <h1>ABOUT US</h1>
                            <p>AmpleeFi is the largest event collation site in Nigeria, 
                                providing a seamless access to all entertainment options.</p>
                            <ul>
                                <h3>Features coming soon</h3>
                                <p>Ticket resale</p>
                                <p>Free ticket cancellation</p>
                            </ul>
                            <a onClick={this.suggestClick}>Suggest a movie or event</a>
                        </div>
                        <div className="right">
                            <ul>
                                <h1>CONNECT WITH US</h1>
                                <form>
                                    <input type="text" placeholder="Email" />
                                    <a>></a>
                                </form>
                            </ul>
                            <ul className="middle">
                                <li>
                                <img src="/static/src/img/facebook.webp"/></li>
                                <li><img src="/static/src/img/twitter.webp"/></li>
                                <li><img src="/static/src/img/instagram.webp"/>
                                </li>
                            </ul>
                            <p>© 2020 AmpleeFi Inc. All Right Reserved</p>
                        </div>
                    </div>
                </div>
                <SlidePopUp click={this.state.click} close={this.suggestClose}>
                    <Suggestion />
                </SlidePopUp>
            </footer>
        )
    }
}

export default Footer
