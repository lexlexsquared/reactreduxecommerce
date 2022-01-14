import React from 'react';
import './homepage.styles.scss';
import Directory from '../../directory/directory.component.jsx';

const HomePage = () => {
  return(
  <div className='homepage'>
    {/* <h1>Hello I am here, homepage</h1> */}
    <Directory />
  </div>)
}

export default HomePage;