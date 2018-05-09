import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history'
import './App.css';
import * as constants from  './components/constants.js';
import HomePage from './homePage.js';
import Nav from './nav.js';
import Footer from './footer.js';
import MediaTable from './components/mediaTable.js';
import MoviePage from './moviePage.js';
import Browse from './browse.js';
import ProfilePage from './profilePage.js';
import CelebrityPage from './celebrityPage.js'
import ResetPasswordPage from './resetPasswordPage.js'
import searchPage from './searchPage.js'
import AboutUs from './footer_pages/aboutUs.js'
import TermsAndConditions from './footer_pages/termsAndConditions.js'
import AdminPage from './adminPage.js'
import ContactUs from './footer_pages/contactUs.js'
import SettingsPage from './settingsPage.js';
import Page404 from './404.js'
import { Grid, Image, Container,  List, Header,Divider,  Segment} from 'semantic-ui-react'



class App extends Component {

  
  render() {
    return (
      <Router>
        <div style={{}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:movieId" component={MoviePage} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/profile/:userId" component={ProfilePage}/>
            <Route exact path='/celebrity/:celebId' component={CelebrityPage} />
            <Route exact path='/search/:search' component={searchPage} />
            <Route exact path='/aboutus/' component={AboutUs} />
            <Route exact path='/contactus/' component={ContactUs} />
            <Route exact path='/termsAndConditions/' component={TermsAndConditions} />
            <Route exact path='/profile/:userId/settings' component={SettingsPage} />
            <Route exact path='/resetpassword/:id/:token' component={ResetPasswordPage} />
            <Route exact path='/verified' render={(props) => (<HomePage verified='verified' {...props}/>)}  />
            <Route exact path='/profile/:userId/admin' component={AdminPage} />
            <Route exact path='/404/' component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
