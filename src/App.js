import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history'
import './App.css';
import * as constants from  './constants.js';
import Home from './home.js';
import Nav from './nav.js';
import Footer from './footer.js';
import MediaTable from './mediaTable.js';
import MovieDetails from './movieDetails.js';
import Browse from './browse.js';
import Profile from './profile.js';
import CelebrityDetails from './celebrityDetails.js'
import ResetPassword from './resetPassword.js'
import searchPage from './searchPage.js'
import AboutUs from './aboutUs.js'
import TermsAndConditions from './termsAndConditions.js'
import { Grid, Image, Container,  List, Header,Divider,  Segment} from 'semantic-ui-react'
import ManageAccount from './manageAccount';



class App extends Component {

  
  render() {
    return (
      <Router>
        <div style={{}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:movieId" component={MovieDetails} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/profile/:userId" component={Profile}/>
            <Route exact path='/celebrity' component={CelebrityDetails} />
            <Route exact path='/search/:search' component={searchPage} />
            <Route exact path='/aboutus/' component={AboutUs} />
            <Route exact path='/aboutus/' component={TermsAndConditions} />
            {/* <Route exact path='/verified' component={} /> */}
            <Route exact path='/profile/:userId/settings' component={ManageAccount} />
            <Route exact path='/resetpassword/:id/:token' component={ResetPassword} />
          </Switch>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
