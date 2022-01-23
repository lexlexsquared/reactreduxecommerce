import React from 'react';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />    
        <Route path='/shop' component={ShopPage} />         
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;