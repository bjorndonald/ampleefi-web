import React, { Component } from 'react'

export class RightBar extends Component {
    render() {
        return (
            <div className="right">
                <div className="title">
                    <h2>My Account</h2>
                    <p>View and edit your personal info below:</p>
                </div>
                
                <form>
                    <div className="row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="eg Kate" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="eg Simon" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="eg Kate" value="ampleefi@yahoo.com" />
                            <small>This is the email we'll also use to contact you.</small>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" placeholder="eg +234-567-8901" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text" placeholder="eg Kate" value="ampleefi@yahoo.com" />
                            
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="text" placeholder="eg +234-567-8901" />
                        </div>
                    </div>
                    <div className="submit-buttons">
                        <a className="btn btn-grey">Update Info</a>
                        <a className="btn btn-danger">Delete Account</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default RightBar
