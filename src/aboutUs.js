import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { 
    Grid, 
    List,
    Breadcrumb,
    Icon,
    Image,  
    Container,  
    Header,   
} from 'semantic-ui-react';

class AboutUs extends Component {

	render() {
		return (
			<div>
            <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>About Us</Header>
                <h2>Who We Are</h2>
                <p>We are Cedar, a wonderful place to find your next movie or television show to watch. Read reviews, post your own, and follow your favorite reviewers.</p>
                <h2>What Should I Do Now?</h2>
                <p>Register for an account to access more features!</p>
            </Container>
            </div>
			)
	}

}

export default AboutUs