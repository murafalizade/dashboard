import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressCircle.scss'

export const ProgressCircle = () => {
  return (
    <div className='progress-circle'>
        <CircularProgressbar value={66} text={'66%'}/>
        <div>
          <p>Rüşvət</p>
          <h4>95 <span>rəy</span></h4>
        </div>
    </div>
  )
}
