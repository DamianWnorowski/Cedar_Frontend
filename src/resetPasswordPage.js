import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { 
    Button,
    Form,
    Container,  
    Header,   
} from 'semantic-ui-react';
import setAuthToken from './setAuthToken'

class ResetPasswordPage extends Component {

    constructor(props){
        super(props);
        this.state = { 
            newpassword: '',
            renewpassword: '',
        }
    }
    
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    componentDidMount(){
        const {id, token} = this.props.match.params;
        console.log('id: ' + id + 'token: ' + token)
        axios.get('http://localhost:8080/forgot/'+ id + '/' + token)
        .then((res) => {
            console.log('one time token back: ', res.data)
            //localStorage.setItem('jwtToken', res.data)
            setAuthToken(res.data)
        })
        .catch((error) => {
            console.log('err', error.status)
        });
    }
    
    handleChangePassword(){
        const pw = 'CHANGE THIS TO THE PW FROM FORM';
        axios.get(`http://localhost:8080/secure/resetpassword?p=`+ pw)
        .then(res => {
            const ans = res.data;
            console.log("reported: " + ans)
            localStorage.removeItem('jwtToken');
            setAuthToken(null);
        })
    }
    
    render(){
        return (
            <div>
                <Container textAlign='center' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Reset Password</Header>
                    <Form onSubmit={this.handleChangePassword} style={{paddingLeft:'3em'}}> 
                        <Form.Input name='newpassword' type='password' placeholder='New Password' onChange={this.onChange} />
                        <Form.Input name='renewpassword' type='password' placeholder='Re-enter New Password' onChange={this.onChange} />
                        <Button color='blue' size='small' type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ResetPasswordPage;