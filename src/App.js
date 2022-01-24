import React from 'react';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndUpPage from './components/pages/sign-in-and-up/sign-in-and-up.component.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />    
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndUpPage} />         
      </Switch>
    </div>
  );
}

export default App;