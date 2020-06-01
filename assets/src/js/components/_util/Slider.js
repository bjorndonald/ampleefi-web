import React, { Component, Fragment } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: {min: 2000, max:5000}
        }
    }

    componentWillMount(){
        
    }

    render() {

        
        return (
            <InputRange maxValue = {10000}
            minValue={1000}
            value={this.state.value}
            onChange={value => this.setState({value})}
            step={500}
            />
        )
    }
}

export default Slider
