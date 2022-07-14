import React,{useState} from 'react'
import { DonutCircle } from '../topic/DonutCircle/DonutCircle'
import '../topic/Topic.scss';

export default function Type() {

    const [data,setData] = useState({labels:["Ərizə", "Şikayət", "Sorğu", "Təklif"],percentage:[35, 40, 6,11]})
  return (
    <div className='comps'>
      <h4>Növ</h4>
      <div className='topic_layout'>
        {/* <DonutCircle percentageData={data} /> */}
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
