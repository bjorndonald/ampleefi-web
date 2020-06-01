import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container">  
                    <div className="service">
                        <span className="service-logo"><img src="static/src/img/support.png" /></span>
                        <h2 className="service-title">24/7 Customer Support</h2>
                        <small>We will always be avaailable to ensure any issues that
                            customers may encounter be dealt effectively
                        </small>
                    </div>
        
                    <div className="service">
                        <span className="service-logo"><img src="static/src/img/security.jpg" /></span>
                        <h2 className="service-title">100% Secure</h2>
                        <small>All transactions carried out on this platform are All
                            heavily protected against unauthorized access
                        </small>
                    </div>
        
                    <div className="service">
                        <span className="service-logo"><img src="static/src/img/cards.png" /></span>
                        <h2 className="service-title">Supports:</h2>
                        <p><img src="/static/src/img/mastercard.png"/>
                        <img src="/static/src/img/visa.png"/>
                        <img src="/static/src/img/interswitch.png"/>
                        </p>
                    </div>
                    
            </div>
        </div>
        )
    }
}

export default Services
