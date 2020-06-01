import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContent extends Component {
    render() {
        const mapStyles = {
            width: '70vw',
            height: '50vh',
        };

        return (
            <Map
                google={this.props.google}
                zoom={8}
                className={'map'}
                style={mapStyles}
                initialCenter={{ lat: -1.2884,
                    lng: 36.8233}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQl_MXWvMfeY9W9qn4s24ugw4nHS1nqbI'
  })(MapContent);
