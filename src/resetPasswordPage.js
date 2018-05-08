import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { 
    Button,
    Form,
    Container,  
    Header,   
} from 'semantic-ui-react';


class ResetPasswordPage extends Component {

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
                <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Reset Password</Header>
                    <Form onSubmit={this.handleChange} style={{paddingLeft:'3em'}}> 
                        <Form.Input name='oldpassword' placeholder='Old Password' onChange={this.onChange} />
                        <Form.Input name='newpassword' placeholder='New Password' onChange={this.onChange} />
                        <Form.Input name='renewpassword' placeholder='Re-enter New Password' onChange={this.onChange} />
                        <Button color='blue' size='small' type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ResetPasswordPage;