import React from 'react';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import { Link, Switch, Route } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div>
        {/* <Route exact path='/' component={HomePage} />             */}
      <HomePage />
    </div>
  );
}

export default App;