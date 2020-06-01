import React, { Component } from 'react';
import BasicEvent from './../_util/BasicEvent';
import DropDown from './../_util/DropDown';
import events from './../../../../../events';
import movies from './../../../../../movies';

export class Events extends Component {
    constructor(props){
        super(props);
        this.eventsList = events.data;
        this.moviesList = movies.data;
    }
    render() {
        const sortData = {
            display : 'Select State',
            options: [
                'Abuja',
                'Lagos',
                'Warri',
                'Port Harcourt'
            ]
        }
        return (
            <section className="events-section">
                {/* <div className="section-header events-header">
                    <div className="left"></div>
                    <div className="right">
                        <DropDown data={sortData} />         
                    </div>
                </div> */}
                <div className="basic-events">
                    {
                        this.moviesList.map((s,i) => (
                            <BasicEvent tip={(i+1).toString()} title={s.title}
                                price={s.price} />    
                        ))
                    } 
                    {
                        this.moviesList.map((s,i) => (
                            <BasicEvent tip={(i+1).toString()} title={s.title}
                                price={s.price} />    
                        ))
                    } 
                </div>
                <div className="bottom">
                    <a className="btn btn-see-more">SEE MORE</a>
                </div>
            </section>
        )
    }
}

export default Events
