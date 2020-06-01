import React, { Component } from 'react'

export class CheckBox extends Component {
    constructor(props){
        super(props);
        this.check = <input type="checkbox" id={`${this.props.id}`} />
    }
    render() {
        if(this.props.checked == true)
            this.check = <input type="checkbox" id={`${this.props.id}`} checked/>

        return (
            <div className="check-box">
                <input type="checkbox" id={`${this.props.id}`} checked={this.props.checked}
                    onClick={this.props.click}/>
                <label for={`${this.props.id}`} >
                    <a>{this.props.title}</a>
                </label>
            </div>
        )
    }
}

export default CheckBox
