import React from 'react'
import { useParams } from 'react-router-dom';
import './Navbar.scss';
import person from '../../../assets/logos/person.svg';
import backArrow from '../../../assets/logos/backArrow.svg';

export const Navbar = () => {
  const  {id}  = useParams();
  console.log(id)
  return (
    <div className='layout_navbar'>
      {id ? (<a href='/hamsi'>
        <img src={backArrow} alt='back-arrow' />
        Hamısı</a>) : null}

      <div>
        <p>Jones Ferdinand</p>
        <img src={person} />
      </div>

    </div>
  )
}
