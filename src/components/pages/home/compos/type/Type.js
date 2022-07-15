import React,{useState} from 'react'
import { DonutCircle } from '../topic/DonutCircle/DonutCircle'
import NewDonutCircle from '../topic/DonutCircle/NewDonutCircle'
import '../topic/Topic.scss';

export default function Type() {

    const [data,setData] = useState({labels:["Ərizə", "Şikayət", "Sorğu", "Təklif"],percentage:[35, 40, 6,11]})
  return (
    <div className='comps'>
      <h4>Növ</h4>
      <div className='topic_layout'>
        {/* <DonutCircle percentageData={data} /> */}
        <div style={{height:'300px',width:'400px'}}>
        <NewDonutCircle data={[{
          id: "Ərizə",
          label: "Ərizə",
          value: 35,
          color: "hsl(20, 100%, 9%)"
        },
        {
          id: "Şikayət",
          label: "Şikayət",
          value: 40,
          color: "hsl(0, 100%, 73%)"
        },
        {
          id: "Sorğu",
          label: "Sorğu",
          value: 6,
          color: "hsl(47, 100%, 72%)"
        },
        {
          id: "Təklif",
          label: "Təklif",
          value: 11,
          color: "	hsl(133, 50%, 61%)"
        }]}/></div>
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
