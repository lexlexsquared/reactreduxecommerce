import React from 'react';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndUpPage from './components/pages/sign-in-and-up/sign-in-and-up.component.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  };

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  };

  render () {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />    
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndUpPage} />         
      </Switch>
    </div>
    );
  }
}

export default App;