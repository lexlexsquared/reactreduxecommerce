import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'; //higher order component --> function that takes any component and modifies, then returns modified component. allows us to access history etc by wrapping the exported function

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`) }>
    <div className='background-image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);