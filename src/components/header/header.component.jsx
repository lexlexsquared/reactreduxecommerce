import React from 'react';
import { Link } from 'react-router-dom';
import crown from '../assets/crown.svg'; 
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={crown} alt="home"/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {
        currentUser ?
        <div clasName='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>
        SIGN IN
      </Link>
      }
    </div>
  </div>
)

export default Header;