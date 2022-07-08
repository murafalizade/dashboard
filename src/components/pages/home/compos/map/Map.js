import React from 'react'
import GoogleMaps  from './googleMap/GoogleMap';
import './Map.scss';

export const Map = () => {
  return (
    <div className='map-container'>
        <GoogleMaps />
    </div>
  )
}
