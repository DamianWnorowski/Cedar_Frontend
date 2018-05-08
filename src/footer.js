import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import { Grid, Image, Container,  List, Header,Divider,  Segment} from 'semantic-ui-react'



const Footer = () =>{
    return (
        <Segment
            inverted
            vertical
            style={{ margin: '5em 0em 0em', }}
        >
            <Container textAlign='center'>
            <List horizontal inverted divided link>
                <List.Item as={Link} to='/contactus'>Contact Us</List.Item>
                <List.Item as={Link} to='/termsandconditions'>Terms and Conditions</List.Item>
                <List.Item as={Link} to='/aboutus'>About Us</List.Item>
                <List.Item as='a' href='https://twitter.com/GloriousCedars'><Image src={twitter}/></List.Item>
                <List.Item as='a' href='https://www.facebook.com/gloriousteamcedar/'><Image src={facebook}/></List.Item>
            </List>
            </Container>
        </Segment>
    )
}

export default Footer