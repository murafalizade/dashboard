import React, { useEffect, useState } from 'react';
import GoogleMap from "google-map-react";
import searchLogo from '../../../../../../assets/logos/searchBlack.svg';
import negativeMarker from '../../../../../../assets/logos/negativMarker.svg'
import neytralMarker from '../../../../../../assets/logos/neytralMarker.svg'
import positiveMarker from '../../../../../../assets/logos/positiveMarker.svg'
import negative from '../../../../../../assets/logos/negative.svg'
import neytral from '../../../../../../assets/logos/neytral.svg'
import positive from '../../../../../../assets/logos/positive.svg'

const GoogleMaps = () => {

    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }, [])

    return (
        <GoogleMap
            apiKey={""}
            bootstrapURLKeys={{ key: "" }}
            center={position}
            zoom={13}>
            <label className='search-container'>
                <img className='icon' src={searchLogo} />
                <input className='search-bar' placeholder='Axtar' />
            </label>
            <img
                className="map-marker"
                src={negativeMarker}
                lat={position.lat}
                lng={position.lng}
            />

            <img
                className="map-marker"
                src={neytralMarker}
                lat={'40.454411'}
                lng={'49.738991'}
            />

            <img
                className="map-marker"
                src={negativeMarker}
                lat={'40.226650'}
                lng={'49.575771'}
            />

            <img
                className="map-marker"
                src={positiveMarker}
                lat={'40.396530'}
                lng={'49.902000'}
            />


            <div className='navigator'>
                <div>
                    <img src={negative} /><span>Neqativ rəylər</span>
                </div>
                <div>
                    <img src={neytral} /><span>Neytral rəylər</span>
                </div>
                <div>
                    <img src={positive} /><span>Pozitiv rəylər</span>
                </div>

            </div>
        </GoogleMap>
    );
}

export default GoogleMaps
