import React from 'react'
import { GuageCircle } from './guageCircle/GuageCircle'

export const Content = () => {
    return (
        <div className='comps'>
            <h4>Məzmun</h4>
            <div className='topic_layout'>
                <GuageCircle />
                <div className='topic_body'>
                    <p>Ümumi rəy sayı:</p>
                    <h5>257</h5>
                    <ul>
                        <li>163</li>
                        <li>80</li>
                        <li>29</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
