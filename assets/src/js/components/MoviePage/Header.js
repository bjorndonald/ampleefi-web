import React, { Component } from 'react';

export class Header extends Component {
    render() {
        const style = {
            backgroundImage: `url(/static/src/img/movie_potrait_${this.props.tip}.jpg)`
        }
        return (
            <header style={style}>
                
            </header>
        )
    }
}

export default Header
