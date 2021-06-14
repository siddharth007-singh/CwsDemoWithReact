import './App.css';
import React from 'react';
import Navbars from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Switch,Link, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CourceFilters from './components/CourceFilters';
import CategoryFilterLayout from './components/CategoryFilterLayout';
import VideoStream from './Learning/VideoStream';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbars/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/product/:id" component={CourceFilters}/>
          <Route exact path="/:category" component={CategoryFilterLayout}/>
          {/* <Route exact path="" component={VideoStream}/> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App; 