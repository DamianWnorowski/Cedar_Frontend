import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  
    Container,  
    Header,  
    Button
} from 'semantic-ui-react';

class Page404 extends Component {

	render() {
		return (
			<div>
            <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>404</Header>
                <h2>Page Not Found</h2>
                <Button as={Link} to='/' color='blue' size='large'>Home</Button> 
            </Container>
            </div>
			)
	}

}

export default Page404