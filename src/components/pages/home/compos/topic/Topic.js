import React from 'react'
import { DonutCircle } from './DonutCircle/DonutCircle'
import './Topic.scss';

export default function Topic() {
  return (
    <div className='comps'>
      <h4>Mövzu</h4>
      <div className='topic_layout'>
        <DonutCircle percentageData={{labels:["İnternet", "Telefon", "Digər", "TV"],percentage:[46, 24, 19, 11]}} />
        <div className='topic_body'>
          <p>Ümumi rəy sayı:</p>
          <h5>190</h5>
          <ul>
            <li>98</li>
            <li>49</li>
            <li>16</li>
            <li>27</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
