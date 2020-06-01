import React, { Component } from 'react';
import BasicEvent from './../_util/BasicEvent';
import events from './../../../../../events';
import movies from './../../../../../movies';

export class Content extends Component {
    constructor(props){
        super(props);
        this.eventsList = events.data;
        this.moviesList = movies.data;
        
    }
    render() {
        return (
            <div className="content">
                <h1 className="section-title">Events</h1>
                <div className="container">
                    <div className="basic-events">
                        {
                            this.eventsList.map((s,i) => (
                                <BasicEvent tip={(i+1).toString()} title={s.title}
                                    price={s.price} />    
                            ))
                        }                                                                     
                    </div> 
                    <div className="bottom">
                        <a className="btn btn-see-more">See More</a>
                    </div>
                </div>
                <h1 className="section-title">Movies</h1>
                <div className="container">
                    <div className="basic-events">
                        {
                            this.moviesList.map((s,i) => (
                                <BasicEvent tip={(i+1).toString()} title={s.title} type="movie"
                                    price={s.price} />    
                            ))
                        }                                                                     
                    </div>
                    <div className="bottom">
                        <a className="btn btn-see-more">See More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
