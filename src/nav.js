import React, { Component } from 'react';
import './App.css';
import { Grid, Image, Input, Container, Menu, List, Header,Divider, Segment } from 'semantic-ui-react'

class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu  inverted style={{color:'white', backgroundColor:'black'}}>
            <Container>
            <Grid container 
            >
                <Grid.Row style={{ paddingTop:'2rem'}}>
                <Grid.Column width={3}>
                    Cedar
                </Grid.Column>
                <Grid.Column width={10}>
                    <Input
                    fluid
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                    />
                    <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                    <Menu.Item text color={'blue'} style={{color:'white'}} name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item text color={'blue'} style={{color:'white'}} name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Item text color={'blue'} style={{color:'white'}} name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={3}>
                    Cedar
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            </Menu>
        )
    }
}
export default Nav;