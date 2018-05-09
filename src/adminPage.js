import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import AdminDisplayContent from './adminDisplayContent.js'
import AdminEditContent from './adminEditContent.js'
import {Container,Header, Menu, Grid} from 'semantic-ui-react';

class AdminPage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeItem: 'content',
        }
    }
    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount(){
        
    }

    render(){
        const {activeItem} = this.state;
        return (
            <div>
                <Container textAlign='center' style={{backgroundColor:'black', padding:'2em'}}>
                    <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Admin Page</Header>
                    <Grid style={{marginRight:'0em'}}>
                        <Grid.Column width={4}>
                            <Menu inverted style={{backgroundColor:'rgba(2, 199, 255, 0.5)'}} color='blue' pointing secondary vertical>
                                <Menu.Item name='content' active={activeItem === 'content'} onClick={this.handleItemClick} />
                                <Menu.Item name='reports' active={activeItem === 'reports'} onClick={this.handleItemClick} />
                                <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick} />
                            </Menu>        
                        </Grid.Column>
                        <Grid.Column stretched width={12} style={{backgroundColor:'rgba(2, 199, 255, 0.2)'}}>
                            <Container >
                                {(activeItem == 'content')? 
                                <AdminEditContent />
                                
                                : null }
                                {(activeItem == 'reports')? 
                                <div>do reports here</div>
                                
                                : null }
                                {(activeItem == 'users')? 
                                <div>Do user here</div>
                                
                                : null }


                            </Container>
                        </Grid.Column>
                    </Grid>        


                </Container>
            </div>
        )
    }

}

export default AdminPage;