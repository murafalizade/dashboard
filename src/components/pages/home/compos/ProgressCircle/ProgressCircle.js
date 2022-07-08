import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressCircle.scss'

export const ProgressCircle = () => {
  return (
    <div>
        <CircularProgressbar value={66} text={'66%'}/>
    </div>
  )
}
