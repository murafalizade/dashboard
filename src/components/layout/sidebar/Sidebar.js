import React from 'react'
import './Sidebar.scss';
import logo from '../../../assets/logos/navbarBrand.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='navbar-brand'>
            <img src={logo} alt='logo' />
        </div>
        <ul className='side-list'>
            <li>İdarə paneli</li>
            <li>Axtar</li>
            <li>Hamısı</li>
            <li>Sosyal Medya</li>
            <li>Email</li>
            <li>“Bizimlə Əlaqə”</li>
            <li>Skan edilmiş fayllar</li>
            <li>Tənzimləmə</li>
        </ul>
    </div>
  )
}
