import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import {Container,Header, Menu,Form,  Grid, Table, Icon, Button} from 'semantic-ui-react';

class AdminEditContent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeItem: 'content',
        }
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handleContent = (e) => {
        console.log('edit content')
    }


    render(){
        return(
            <div>
                <Container  textAlign='left' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Edit Content</Header>
                    <Form inverted onSubmit={this.handleContent} style={{paddingLeft:'3em'}}> 
                        <Form.Input label='Id' name='id' onChange={this.onChange} />
                        <Form.Input label='Title' name='title' onChange={this.onChange} />
                        <Form.Input label='Id' name='id' onChange={this.onChange} />
                        <Button color='blue' size='small' type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>


        )
    }



}
export default AdminEditContent;