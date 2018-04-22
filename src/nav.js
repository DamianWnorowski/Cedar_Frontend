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
                <Grid.Column width={8}>
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
                <Grid.Column width={2} style={{paddingLeft:0,paddingTop:5, marginLeft:'-3.5em'}}>
                    <Link to={'/search/' + this.state.search}  ><Icon inverted name='search' color='blue' circular link onClick={this.onSearch}/></Link>
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