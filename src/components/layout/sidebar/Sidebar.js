import React from 'react'
import './Sidebar.scss';
import logo from '../../../assets/logos/navbarBrand.png'
import controlPanel from '../../../assets/logos/controlPanel.svg';
import search from '../../../assets/logos/search.svg';
import files from '../../../assets/logos/files.svg';
import all from '../../../assets/logos/all.svg';
import mail from '../../../assets/logos/mail.svg';
import contactUs from '../../../assets/logos/contactUs.svg';
import settings from '../../../assets/logos/settings.svg';
import socialMedia from '../../../assets/logos/socialMedia.svg';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='navbar-brand'>
            <img src={logo} alt='logo' />
        </div>
        <ul className='side-list'>
            <li><img src={controlPanel}/>İdarə paneli</li>
            <li><img src={search}/>Axtar</li>
            <li><img src={all}/>Hamısı</li>
            <li><img src={socialMedia}/>Sosyal Medya</li>
            <li><img src={mail}/>Email</li>
            <li><img src={contactUs}/>“Bizimlə Əlaqə”</li>
            <li><img src={files}/>Skan edilmiş fayllar</li>
            <li><img src={settings}/>Tənzimləmə</li>
        </ul>
    </div>
  )
}
