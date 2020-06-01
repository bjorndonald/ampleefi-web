import React, { Component } from 'react'

export class Suggestion extends Component {
    render() {
        return (
            <div className="suggestion-box">
                <form>
                    {/* <h1>Suggestion Box</h1> */}
                    <div className="form-group">
                        {/* <label for="email">Email</label> */}
                        <input type="text" id="email" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        {/* <label for="title">Email</label> */}
                        <input type="text" id="title" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        {/* <label for="email">Email</label> */}
                        <textarea id="hint" rows="5" placeholder="Event/Movie">

                        </textarea>
                    </div>
                    <div className="bottom">
                        <a className="btn btn-primary">Submit</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Suggestion
