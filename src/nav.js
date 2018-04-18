import React, { Component } from 'react';
import './App.css';
import { Grid,  Input, Container, Menu, Header,Popup,  Button , Form, Segment} from 'semantic-ui-react';
import axios from 'axios';

const home = 'home';
const browse = 'browse';

class Nav extends Component {
    constructor(props){
        super(props)
        
        // TODO: maybe set state based on current user?
        this.state = { 
            activeItem: 'home',
            id: '',
            fname: '',
            lname: '',
            password: '',
            email: '',
            login: false,
        }
    }
    
    // isActive = (e) => {
    //     console.log(e)
    //     this.setState({
            
    //     })

    // }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }
    
    // onChange will modify the state based on the name of the input
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleRegisterSubmit = (e) => {
        e.preventDefault();
        const {fname, lname, password, email} = this.state;
       
        // TODO: DATA VERIFICATION (maybe in the onchange?)
        axios.post(`http://localhost:8080/register`, {fname, lname, password, email})
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

                    this.setState({login:true})
                    console.log(result.data);
        })
                .catch((error) => {
                    console.log('err',error);
        });
                        
    }
    
    render() {
        const { activeItem } = this.state;
        return (
            <Menu  inverted style={{color:'white', backgroundColor:'black'}}>
            <Container>
            <Grid container 
            >
                <Grid.Row style={{ paddingTop:'2rem'}}>
                <Grid.Column width={3}>
                    <Header textAlign='right' size='large' style={{color:'white'}}>Cedar</Header>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Input
                    fluid
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                    />
                    <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                    <Menu.Item  color={'blue'} style={{color:'white'}} href = '/' name={home} active={activeItem === home} onClick={this.handleItemClick} />
                    <Menu.Item  color={'blue'} style={{color:'white'}} href= {browse} name={browse} active={activeItem ===  browse} onClick={this.handleItemClick} />
                    <Menu.Item  color={'blue'} style={{color:'white'}} name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={3}>
                    {(this.state.login)? <Header style={{color:'white'}}>{this.state.email}</Header> : 
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
                                    <Form.Input fluid type="text" name="fname" label='First name' placeholder='First name' onChange={this.onChange}/>
                                    <Form.Input fluid type="text" name="lname" label='Last name' placeholder='Last name' onChange={this.onChange}/>
                                    <Form.Input fluid type="text" name="email" label='Email' placeholder='Email' onChange={this.onChange}/>
                                    <Form.Input fluid type="password" name="password" label='Password' placeholder='Password' onChange={this.onChange}/>
                                <Form.Checkbox label='I agree to the Terms and Conditions' />
                                <Button type='submit'>Submit</Button>
                                </Form>
                            </Segment>
                        </Popup>
                    </Menu>}
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            </Menu>
        )
    }
}
export default Nav;