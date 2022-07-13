import React from 'react'
import './TextComp.scss'
import dateLogo from '../../../../assets/logos/date.svg'

export const TextComp = () => {
  return (
    <div className='comps text_container'>
        <h3>Lorem ipsum</h3>
        <p>loreMagna enim ad <span className='ticket'>magna</span> ullamco ipsum deserunt ea. Deserunt in consectetur cupidatat irure adipisicing <span className='ticket ticket-date'><img src={dateLogo} />1998</span> aliqua voluptate nostrud et eiusmod consequat qui exercitation. Sint eu culpa ex officia sint et <span className='ticket ticket-blue'>cillium</span> cupidatat aute id. Commodo cillum laboris dolor ad velit voluptate labore proident velit et eu. <span className='ticket dtype'>deserunt <span>D</span></span> dolor tempor officia reprehenderit non <span className='ftype ticket'>fugiat<span>F</span></span>  nostrud exercitation labore <span className='etype ticket'>enum<span>E</span></span> consequat duis.</p>
        <div className='icon_container'>
          <span className='icon-keyword ticket-date'><img src={dateLogo} /></span>
          <span className='icon-keyword dtype'>D</span>
          <span className='icon-keyword ftype'>F</span>
          <span className='icon-keyword etype'>E</span>
        </div>

        <div className='keyword_container'>
          <p>Müraciətin növü:<br/>
            <span className='ticket'>Şikayət</span>
          </p>

          <p>Məzmun:<br/>
            <span className='ticket'>Neqativ</span>
          </p>
        </div>
        
        <div className='keywords'>
          <p>Açar sözlər</p>
          <span className='ticket'>Rüşvət </span>
          <span className='ticket'>İş</span>
          <span className='ticket'>Qovmaq</span>
          <span className='ticket'>Prezident</span>
          <span className='ticket'>Nazir</span>
        </div>
    
    </div>
  )
}
