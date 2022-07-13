import React from 'react'
import GoogleMaps  from './googleMap/GoogleMap';
import './Map.scss';

export const Map = ({width}) => {
  return (
    <div style={{width:width?width:'600px'}} className='map-container'>
        <GoogleMaps />
    </div>
  )
}
