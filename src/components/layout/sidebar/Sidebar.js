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
            <a href="/"><img src={logo} alt='logo' /></a>
        </div>
        <ul className='side-list'>
            <li><a href='#'><img src={controlPanel}/><span>İdarə paneli</span></a></li>
            <li><a href='#'><img src={search}/><span>Axtar</span></a></li>
            <li>
              <form>
                <select>
                  <option>AzTelecom</option>
                </select>
              </form>
            </li>
            <li><a href='#'><img src={all}/><span>Hamısı</span></a></li>
            <li><a href='#'><img src={socialMedia}/><span>Sosyal Medya</span></a></li>
            <li><a href='#'><img src={mail}/><span>Email</span></a></li>
            <li><a href='#'><img src={contactUs}/><span>“Bizimlə Əlaqə”</span></a></li>
            <li><a href='#'><img src={files}/><span>Skan edilmiş fayllar</span></a></li>
            <li><a href='#'><img src={settings}/><span>Tənzimləmə</span></a></li>
        </ul>
    </div>
  )
}
