import React, { Component } from 'react'

export class Ball extends Component {
    render() {
        const div_style={
            backgroundColor: this.props.color,
            width: this.props.size +'px',
            height: this.props.size+'px',
        }
        return (
            <div className="ball" style={div_style}>
            </div>
        )
    }
}

export default Ball
