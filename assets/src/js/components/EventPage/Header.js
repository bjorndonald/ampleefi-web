import React, { Component } from 'react';

export class Header extends Component {
    render() {
        const style = {
            backgroundImage: `url(/static/src/img/event_${this.props.tip}.webp)`
        }
        return (
            <header style={style}>
                <div className="overlay">
                    <h1></h1>
                </div>
            </header>
        )
    }
}

export default Header
