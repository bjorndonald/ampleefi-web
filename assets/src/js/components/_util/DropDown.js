import React, { Component } from 'react';
import $ from 'jquery';
import Tick from './Tick'

export class DropDown extends Component {

    constructor(props){
        super(props);
        let text;
        
    }

    componentDidMount(){
        
    }

    open(e){ 
        
        $(e.target).toggleClass('active');
    }

    openSpan(e){
        console.log($(e.target));
        $(e.target).parent().toggleClass('active');
    }

    clicked(e){
        let text = $(e.target).text();
        $(e.target).parent()
        .parent().parent()
        .find('.display').find('span').text(text);

        // $(e.target).parent()
        // .parent().parent()
        // .find('.display').append(`<div id="down-triangle"></div>`);

        //<div id="down-triangle"></div>
    }

    render() {
        
        return (
            <div className="dropdown">
                <ul>
                    <li className="display" onClick={(e) => this.open(e)}><span onClick={(e) => this.openSpan(e)}>{this.props.data.display}</span><div id="down-triangle"></div>
                        <ul>
                            {
                                this.props.data.options.map((x,i) => {
                                    //alert();
                                    return <li onClick={(e) => this.clicked(e)}>{x}</li>
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DropDown
