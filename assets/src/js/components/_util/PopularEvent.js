import React, { Component } from 'react'

export class PopularEvent extends Component {
    constructor(props){
        super(props);
        this.img = <img src={`/static/src/img/event_${this.props.tip}.jpg`}/>;
        this.backgroundImage = `/static/src/img/event_${this.props.tip}.jpg`;
        if(this.props.type=="movie"){
            this.img = <img src={`/static/src/img/movie_potrait_${this.props.tip}.png`}/>;
            this.backgroundImage = `/static/src/img/movie_potrait_${this.props.tip}.png`;
        }
    }
    render() {
        const styles={
            backgroundImage: `url(${this.backgroundImage})`
        }
        return (
            <div className="event" style={styles}>
                <div className="event-overlay"></div>
            </div>
        )
    }
}

export default PopularEvent
