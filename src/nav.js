import React, { Component } from 'react';
import './App.css';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import {  Grid,  Input, Container, Label,  Menu, Header, Popup, Button , Form, Segment, Icon, Dropdown} from 'semantic-ui-react';
import axios from 'axios';
import setAuthToken from './setAuthToken'
import Recaptcha from 'react-google-recaptcha';

const home = 'home';
const browse = 'browse';

class Nav extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            activeItem: 'home',
            id: '',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            login: false,
            forgotPassword: false,
            recaptchaResponse: '',
            captchaVerified: false,
            loginError: false,
            fresh: true,
            name: '',
            mounted: false,
            verified: true,
        }
    }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }


    handleLogout = (e, data) => {
        console.log('remove token')
        localStorage.removeItem('jwtToken');
        this.setState({name:'',login:false,id: '', firstName: '',lastName: '',password: '', email: '', loginError: false, forgotPassword:false, captchaVerified: false,})
        
    }

    forgotPassword = (e) => {
        this.setState({forgotPassword: true})
    }
    forgotPasswordSubmit = (e) => {
        const email = this.state.email;
        this.setState({forgotPassword:false})
            console.log("forgotpassword: ", email)
            axios.get('http://localhost:8080/forgot?email=' +  email )
        .then((response) => {
            console.log('res',response)
        })
        .catch((error) => {
            console.log('err', error.status)
        });
    }
        
    
    // onChange will modify the state based on the name of the input
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleRegisterSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, password, email, recaptchaResponse} = this.state;
       
        // TODO: DATA VERIFICATION (maybe in the onchange?)
        axios.post(`http://localhost:8080/register`, {firstName, lastName, password, email, recaptchaResponse})
                .then((result) => {
                    console.log(result);
        })
                .catch((error) => {
                    console.log(error);
        });               
    }
       
    handleLoginSubmit = (e) => {
        e.preventDefault();   
        const {email, password} = this.state;
        axios.post(`http://localhost:8080/login`, {email, password})
            .then((result) => {
                const token = result.data.userToken
                console.log('token', token)
                const name = result.data.userName
                console.log("user email: " + name)
                const userId = result.data.userId
                const blacklist = result.data.userBlacklist
                const login = true
                this.setState({login, name, blacklist, userId})
                localStorage.setItem('jwtToken', token)
                setAuthToken(token)
                console.log(result.data);
            })
            .catch(err => {
                const errMsg = err.response.data.message;
                if(errMsg.includes("unverified")){
                    this.setState({verified: false});
                    const failedId = errMsg.replace("unverified", "");
                    this.setState({id: failedId});
                    console.log("Unverified user with id: " + this.state.id);
                }else{
                    this.setState({loginError:true})
                }
            });
    }
    
    onSearchText = (e) => {
        this.setState({search: e.target.value})
    }
    onSearchEnterPress = (e) => {
        if(e.key =='Enter') this.onSearch(e)
    }
    onSearch = (e) => {
        const search = this.state.search;
        console.log('searching: ', search);
        axios.get(`http://localhost:8080/api/search?search=` + search)
          .then(res => {
                console.log('search results: ', res.data)
          })
    }
    componentDidMount(){
        console.log("component mount");
        axios.get(`http://localhost:8080/secure/getuser`)
        .then(result => {
            const name = result.data.email
            console.log("user email: " + name)
            if(name){
                const userId = result.data.id
                const blacklist = result.data.blacklist
                const login = true
                this.setState({login, name, blacklist, userId})
                console.log("refreshed state from backend for" + name)  
            }
        })
   
        try{
            const decoded = decode(localStorage.getItem('jwtToken'));
            if (decoded.exp > Date.now() / 1000) { 
                this.setState({login:true, name:decoded.sub, mounted:true})
                console.log(decoded)
            }
            else
                console.log('no token')
        }catch(err) {
            console.log('reading token error')
        }  
    }
    componentDidUpdate(){
        if(this.state.fresh && !this.state.mounted){
            console.log("COMPONENT DID UPDATE!!!!!!!!!!!")
            try{
                const decoded = decode(localStorage.getItem('jwtToken'));
                if (decoded.exp > Date.now() / 1000) { 
                    this.setState({login:true, name:decoded.sub, fresh:true})
                    console.log("decoded info: " + decoded.sub);
                }
                else
                    console.log('no token');
                    this.setState({login:false, name:"", fresh:false, mounted:false});
            }catch(err) {
                console.log('reading token error')
            }
        }
    }
    
    captchaOnChange = function (response) {
        this.setState({
            'recaptchaResponse': response
        });    
        console.log(response)
    };
    
    resendVerification = (e) => {
        const userId = this.state.id;
        this.setState({login:false, verified:true})
        console.log('users id is: ', userId);
        axios.get(`http://localhost:8080/resendemail?id=` + userId)
          .then(res => {
                console.log('Verification resent')
          })
    }
    
    render() {
        const { activeItem } = this.state
        return (
            <Menu  inverted style={{color:'white', backgroundColor:'black'}}>
            <Container>
            <Grid container>
                <Grid.Row style={{ paddingTop:'2rem'}}>
                <Grid.Column width={3}>
                    <Header textAlign='right' size='large' style={{color:'white'}}>Cedar</Header>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Input
                    fluid
                    placeholder='Search...'
                    onChange={this.onSearchText}
                    onKeyPress={this.onSearchEnterPress}
                    />
                    <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                        <Menu.Item as={ Link } to='/' color={'blue'} style={{color:'white'}} name={home} active={activeItem === home} onClick={this.handleItemClick} />
                        <Menu.Item as={ Link } to='/browse' color={'blue'} style={{color:'white'}} name={browse} active={activeItem ===  browse} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={1} style={{paddingLeft:0,paddingTop:5, marginLeft:'-3.5em'}}>
                    <Link to={'/search/' + this.state.search}  ><Icon inverted name='search' color='blue' circular link onClick={this.onSearch}/></Link>
                </Grid.Column>
                <Grid.Column width={2} style={{backgroundColor:'black'}}>
                    {(this.state.login)? 
                        <Popup
                            inverted
                            on='click'
                            trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name={this.state.name}/>}
                            flowing
                            hoverable
                        >
                            <Menu inverted compact  vertical style={{padding:0}}>
                                <Menu.Item as={ Link } to={'/profile/' + this.state.userId } name='Profile'    />
                                <Menu.Item as={ Link } to={'/profile/' + this.state.userId + '/settings'} name='Settings'   />
                                <Menu.Item as={ Link } to='/' name='logout' onClick={this.handleLogout}/>
                            </Menu>
                        </Popup>
                    :
                        <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                            <Popup
                                inverted
                                on='click'
                                trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name='Login'/>}
                                flowing
                            >
                                <Segment inverted style={{width:'200px'}}>
                                    {(this.state.verified)? 
                                        <Form 
                                            inverted 
                                            onSubmit={(this.state.forgotPassword)? this.forgotPasswordSubmit : this.handleLoginSubmit}
                                        >
                                        <Form.Input fluid type="text" name="email" label='Email' placeholder='Email' onChange={this.onChange}/>
                                        {(this.state.forgotPassword)? null : <Form.Input fluid type="password" name="password" label='Password' placeholder='Password' onChange={this.onChange}/>}
                                            {(this.state.loginError)? <Label basic color='red'>Invalid Email/Password</Label> : null}
                                            <Button type='submit'>{(this.state.forgotPassword)? 'Forgot Password' : 'Login'}</Button>
                                            <div><a style={{cursor:'pointer' }} onClick={this.forgotPassword}>{(this.state.forgotPassword)? ' ' : 'Forgot Password' }</a></div>

                                        </Form>
                                    :
                                        <Button content='Resend Verification' icon='send' labelPosition='right' onClick={this.resendVerification} />
                                    }
                                </Segment>
                            </Popup>
                            <Popup
                                inverted
                                on='click'
                                trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name='Signup'/>}
                                flowing
                            >
                                <Segment inverted >
                                    <Form 
                                        inverted 
                                        onSubmit={this.handleRegisterSubmit}
                                    >
                                        <Form.Input fluid type="text" name="firstName" label='First name' placeholder='First name' onChange={this.onChange}/>
                                        <Form.Input fluid type="text" name="lastName" label='Last name' placeholder='Last name' onChange={this.onChange}/>
                                        <Form.Input fluid type="text" name="email" label='Email' placeholder='Email' onChange={this.onChange}/>
                                        <Form.Input fluid type="password" name="password" label='Password' placeholder='Password' onChange={this.onChange}/>
                                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                                        <Recaptcha
                                            ref="recaptcha"
                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                            onChange={this.captchaOnChange.bind(this)}
                                            theme="dark"
                                          />
                                        <Button type='submit'>Submit</Button>
                                    </Form>
                                </Segment>
                            </Popup>
                        </Menu>
                    }
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            </Menu>
        )
    }
}
export default Nav;