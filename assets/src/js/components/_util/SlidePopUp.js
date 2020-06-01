import React, { Component } from 'react';
import Close from './Close';
import $ from 'jquery';

export class SlidePopUp extends Component {
    constructor(props){
        super(props);
        this.show = null;
    }
    componentDidUpdate(){
        //alert(this.props.click);
        if(this.props.click){
            this.show = 
                <div className='slide popup'>
                    {/* <a className="close"><Close /></a> */}
                    <div className='popup_inner'>
                        <a className="close" onClick={this.props.close}><Close /></a>
                        {this.props.children}
                    </div>
                    <div className="overlay" onClick={this.props.close}>
                    </div>
                </div>;
            $('.suggestion-box').animate({
                left: `${$(window).width()-412}px`
            }, 500)
        }
        else{
             this.show=null;   
        }
    }
    
    render() {
        return (
            this.show
        )
    }
}

export default SlidePopUp
