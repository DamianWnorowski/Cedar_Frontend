import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { 
    Grid, 
    Container,  
    Header,   
} from 'semantic-ui-react';

class TermsAndConditions extends Component {

	render() {
		return (
			<div>
            <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Terms And Conditions</Header>
                <Grid textAlign='center'>
                <Grid.Column width={13}>
                <h2>What You Shouldn't Do</h2>
                <p>Do not post spam reviews or spam us in any other way, create more than one account per person, use profanity, or post anything illegal under the laws of the United States of America, the State of New York, its county of Suffolk, its town of Brookhaven, and/or its hamlet of Stony Brook.</p>
                <h2>Which Legal Rights You Forfeit</h2>
                <p>A user who has not entered into any formal monetary contract with Cedar has no right to sue us for any reason whatsoever.</p>
                <h2>Our Rights</h2>
                <p>We reserve the right to terminate your account, remove any features, or restrict your functionality at any time, for any reason, with or without prior notice.</p>
                </Grid.Column>
                </Grid>
            </Container>
            </div>
			)
	}

}

export default TermsAndConditions