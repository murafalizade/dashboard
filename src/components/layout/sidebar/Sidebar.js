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
            <li><img src={controlPanel}/><span>İdarə paneli</span></li>
            <li><img src={search}/><span>Axtar</span></li>
            <li>
              <form>
                <select>
                  <option>AzTelecom</option>
                  <option></option>
                  <option></option>
                </select>
              </form>
            </li>
            <li><img src={all}/><span>Hamısı</span></li>
            <li><img src={socialMedia}/><span>Sosyal Medya</span></li>
            <li><img src={mail}/><span>Email</span></li>
            <li><img src={contactUs}/><span>“Bizimlə Əlaqə”</span></li>
            <li><img src={files}/><span>Skan edilmiş fayllar</span></li>
            <li><img src={settings}/><span>Tənzimləmə</span></li>
        </ul>
    </div>
  )
}
