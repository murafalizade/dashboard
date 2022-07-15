import React from 'react'
import { DonutCircle } from './DonutCircle/DonutCircle'
import './Topic.scss';
import MyResponsivePie from './DonutCircle/NewDonutCircle'

export default function Topic() {
  return (
    <div className='comps'>
      <h4>Mövzu</h4>
      <div className='topic_layout'>
        <div style={{width:'500px',height:'300px'}}>

        <MyResponsivePie data={[{
          id: "İnternet",
          label: "İnternet",
          value: 52,
          color: "hsl(20, 100%, 49%)"
        },
        {
          id: "Telefon",
          label: "Telefon",
          value: 24,
          color: "hsl(0, 100%, 73%)"
        },
        {
          id: "Digər",
          label: "Digər",
          value: 19,
          color: "hsl(47, 100%, 72%)"
        },
        {
          id: "TV",
          label: "TV",
          value: 11,
          color: "	hsl(133, 50%, 61%)"
        }]} />
        </div>
        {/* //<DonutCircle percentageData={{labels:["", "", "", ""],percentage:[, , , ]}} /> */}
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
