import React, { Component } from 'react';
import Filter from './Filter';
import Events from './Events';

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="wrapper">
                        <Filter />
                        <Events />
                    </div>
                </div>    
            </div>
        )
    }
}

export default Content
