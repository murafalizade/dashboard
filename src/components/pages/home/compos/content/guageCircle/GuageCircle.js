import React, { useState } from 'react'
import './GuageCircle.scss';
import semiChart from '../../../../../../assets/logos/semiChart.png'
import arrow from '../../../../../../assets/logos/arrow.svg'

export const GuageCircle = () => {

  const percentage = 60
  return (
    <div className='guage'>
      <div>
        <div className='guage-content'>
          <h4>81%</h4>
          <p>Neqativ</p>
        </div>
        <div className='guage-body'>
          <img src={semiChart} />
          <img className='arrow' style={{transform:`rotate(${percentage-145}deg)`}} src={arrow} />
        </div>
      </div>

      <div className='series'>
        <ul>
          <li>Neqativ</li>
          <li>Neytral</li>
          <li>Pozitiv</li>

        </ul>
      </div>
    </div>
  )
}
