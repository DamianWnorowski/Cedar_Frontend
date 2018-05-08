import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { 
    Grid, 
    Container,  
    Header,   
} from 'semantic-ui-react';

class ContactUs extends Component {

	render() {
		return (
			<div>
            <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Contact Us</Header>
                <Grid textAlign='center'>
                <Grid.Column width={13}>
                <h2>How To Contact Us</h2>
                <h3>Email: teamcedar2@gmail.com<br></br>
                Twitter: <a href='https://twitter.com/GloriousCedars'>@GloriousCedars</a><br></br>
                Facebook: <a href='https://www.facebook.com/gloriousteamcedar/'>@GloriousTeamCedar</a><br></br>
                Phone: 1-800-GTCEDAR</h3>
                <h2>Frequently Asked Questions</h2>
                <p>Q: How can I contact you?<br></br>
                A: See above</p>
                <p>Q: How can I become an official critic?<br></br>
                A: Post a lot of reviews and apply on our critic application page.</p>
                <p>Q: Are you hiring?<br></br>
                A: No</p>
                </Grid.Column>
                </Grid>
            </Container>
            </div>
			)
	}

}

export default ContactUs