import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import * as constants from  './constants.js'
import { 
    Grid, 
    Menu,
    TextArea,
    List,
    Breadcrumb,
    Button,
    Icon,
    Image,  
    Tab,
    Form,
    Input,
    Container,  
    Header,   
} from 'semantic-ui-react';


class ResetPassword extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {id, token} = this.props.match.params;
        console.log('id: ' + id + 'token: ' + token)
        axios.get('http://localhost:8080/forgot/'+ id + '/' + token)
        .then((res) => {
            console.log('res', res)
            console.log('res.data', res.data)
        })
        .catch((error) => {
            console.log('err', error.status)
        });

    }

    render(){

        return (
            <div>
                {/* <Container  style={{paddingBottom:'1em'}} >
            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Reset Password</Header>
            </Container> */}
            <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Reset Password</Header>
            <Breadcrumb>
                    <Form onSubmit={this.handleChange} style={{paddingLeft:'3em'}}> 
                        <Form.Input name='oldpassword' placeholder='Old Password' onChange={this.onChange} />
                        <Form.Input name='newpassword' placeholder='New Password' onChange={this.onChange} />
                        <Form.Input name='renewpassword' placeholder='Re-enter New Password' onChange={this.onChange} />
                        <Button color='blue' size='small' type='submit'>Submit</Button>
                    </Form>
            </Breadcrumb>
            </Container>
            </div>
        )
    }
}

export default ResetPassword;