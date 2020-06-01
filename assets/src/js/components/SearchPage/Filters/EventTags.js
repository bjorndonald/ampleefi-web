import React, { Component } from 'react'

export class EventTags extends Component {
    render() {
        return (
            <div className="event-tags">
                <p className="filter-title">POPULAR TAGS <i className="fa fa-caret-down"></i></p>
                <div className="filter-content">
                    <ul>                
                        <li>
                            Tiwa Savage
                        </li>
                        <li>
                            African Giant
                        </li>
                        <li>
                            Christian
                        </li>
                        <li>
                            Afro Punk
                        </li>                    
                    </ul>                   
                </div>
            </div>
        )
    }
}

export default EventTags
