import React, { Component } from 'react'
import SmartPhone from './SmartPhone/SmartPhone';
import MapCordinate from './MapCordinate/MapCordinate';

export default class GeoLocation extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="container mt-2">
                    <div className="butons-location-section pt-2 bg-white text-center pb-2 border-bottom">
                        <button className="btn btn-lg btn-outline-primary">
                        USE SMART PHONE LOCATION
                        </button>
                        <button className="btn btn-lg btn-primary">ENTER CORDINATES</button>
                    </div>
                </div>

                <SmartPhone />
                <MapCordinate />

            </React.Fragment>
        )
    }
}
