import React from 'react'
import './Navbar.scss';
import person from '../../../assets/logos/person.svg';

export const Navbar = () => {
  return (
    <div className='layout_navbar'>
      <div>
        <p>Jones Ferdinand</p>
        <img src={person} />
      </div>
      
    </div>
  )
}
