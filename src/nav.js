import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid,  Input, Container, Menu, Header,Popup,  Button , Form, Segment, Icon} from 'semantic-ui-react';

const home = 'home';
const browse = 'browse';

class Nav extends Component {
    constructor(props){
        super(props)

        this.state = { 
            activeItem: 'home' 
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
    onSearchText = (e) => {
        console.log(e)
        this.setState({search: e.target.value})
    }
    onSearchEnter = (e) => {
        console.log(e)
    }
    onSearch = (e) => {
        const search = this.state.search;
        console.log('searching: ', search);
        axios.get(`http://localhost:8080/api/searchsearch=` + search)
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
                <Grid.Column width={10}>
                    <Input
                    fluid
                    icon={<Icon name='search' circular link onClick={this.onSearch}/> }
                    placeholder='Search...'
                    onChange={this.onSearchText}
                    onKeyPress={this.onSearchEnter}
                    />
                    <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                        <Menu.Item as={ Link } to='/' color={'blue'} style={{color:'white'}} name={home} active={activeItem === home} onClick={this.handleItemClick} />
                        <Menu.Item as={ Link } to='/browse' color={'blue'} style={{color:'white'}} name={browse} active={activeItem ===  browse} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Menu inverted stackable style={{backgroundColor:'black', margin:0}}>
                        <Popup
                            inverted
                            on='click'
                            trigger={<Menu.Item  color={'blue'} style={{color:'white'}} name='Login'/>}
                            flowing
                            hoverable
                        >
                            <Segment inverted style={{width:'200px'}}>
                                <Form inverted>
                                    <Form.Input fluid label='Username' placeholder='Username' />
                                    <Form.Input fluid label='Password' placeholder='Password' />
                                <Button href='/profile' type='submit'>Login</Button>
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
                                <Form inverted >
                                    <Form.Input fluid label='Username' placeholder='Username' />
                                    <Form.Input fluid label='First name' placeholder='First name' />
                                    <Form.Input fluid label='Last name' placeholder='Last name' />
                                    <Form.Input fluid label='Email' placeholder='Email' />
                                    <Form.Input fluid label='Password' placeholder='Password' />
                                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </Segment>
                        </Popup>
                    </Menu>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            </Menu>
        )
    }
}
export default Nav;