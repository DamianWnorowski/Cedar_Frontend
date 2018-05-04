import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Grid,  Input, Container, Menu, Header,Popup,  Button , Form, Segment, Icon, Dropdown} from 'semantic-ui-react';
import axios from 'axios';
import setAuthToken from './setAuthToken'

const home = 'home';
const browse = 'browse';

const triggerLogin = (username) => (
    <span style={{ fontSize:'1.3em'}}>
     Hello , {username}
    </span>
  )

const options = [
    { key: 'user', text: 'Account', value: 1},
    { key: 'settings', text: 'Settings', value: 2},
    { key: 'logout', text: 'Sign Out', value: 3},
]

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
        }
    }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    loginMenu = (e, data) => {
        console.log(e.target, "--", data)
        console.log(e.value)
        if(e.target == 'logout') console.log('logut')

        axios.get(`http://localhost:8080/logout`)
                .then((result) => {
                    console.log(result);
        })
                .catch((error) => {
                    console.log(error);
        });    
    }
        
    
    // onChange will modify the state based on the name of the input
    onChange = (e, dta) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleRegisterSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, password, email} = this.state;
       
        // TODO: DATA VERIFICATION (maybe in the onchange?)
        axios.post(`http://localhost:8080/register`, {firstName, lastName, password, email})
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
                const name = result.data.userName
                const blacklist = result.data.userBlacklist
                this.setState({login:true, name, blacklist})
                localStorage.setItem('jwtToken', token)
                setAuthToken(token)
                console.log(result.data);
        })
            .catch((error) => {
                console.log('err',error)
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
                <Grid.Column width={3}>
                    {(this.state.login)? 
                        <Dropdown style={{paddingTop:'.5em'}} trigger={triggerLogin(this.state.name)} options={options} onChange={this.loginMenu} />
                    :
                        <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                            <Popup
                                inverted
                                on='click'
                                trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name='Login'/>}
                                flowing
                                hoverable
                            >
                                <Segment inverted style={{width:'200px'}}>
                                    <Form 
                                        inverted 
                                        onSubmit={this.handleLoginSubmit}
                                    >
                                    <Form.Input fluid type="text" name="email" label='Email' placeholder='Email' onChange={this.onChange}/>
                                    <Form.Input fluid type="password" name="password" label='Password' placeholder='Password' onChange={this.onChange}/>
                                    <Button type='submit'>Login</Button>
                                    </Form>
                                </Segment>
                            </Popup>
                            <Popup
                                inverted
                                on='click'
                                trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name='Signup'/>}
                                flowing
                                hoverable
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