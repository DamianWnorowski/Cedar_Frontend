import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import decode from 'jwt-decode';
import * as constants from  './components/constants.js'
import MediaList from './components/mediaList.js'
import EmptyList from './components/emptyList.js'
import MediaTable from './components/mediaTable.js'
import { Grid, Menu,TextArea, List,Breadcrumb,Button,Icon,Image,  Tab,Form,Input,Container,  Header, } from 'semantic-ui-react';
const imgUrl = "https://image.tmdb.org/t/p/w500/";



class SettingsPage extends Component {
    constructor(props){
        super(props)
        this.state = {  
            userInfo: [],
            login: false,
        }
    }

    editInfo = (e, data) => {
        console.log('edit info', data.name)
        const edit = data.name;
        this.setState({change: edit})
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleChange = (e) => {    
        console.log('change:', this.state.change)
        if(this.state.change == 'email'){
            if(this.state.newemail && this.state.newemail == this.state.renewemail){
                axios.get(`http://localhost:8080/secure/changeemail?email=` + this.state.newemail )
                .then(res => {
                    const userInfo = res.data;
                    console.log('movie:', userInfo)
                })
            }
            
        }
        else if(this.state.change == 'password'){
            if(this.state.newpassword && this.state.oldpassword && this.state.newpassword == this.state.renewpassword){
                axios.post(`http://localhost:8080/secure/changepassword` ,{oldPassword: this.state.oldpassword, newPassword: this.state.newpassword} )
                .then(res => {
                    const userInfo = res.data;
                    console.log('movie:', userInfo)
                })
            }
        }
        else if(this.state.change == 'deleteAccount'){
            console.log('delete')
            axios.post('http://localhost:8080/api/deleteaccount', {id: this.state.userInfo.id, password: this.state.DELETE})
            .then(res => {
                localStorage.removeItem('jwtToken');
                const userInfo = res.data;
                console.log('delete:', userInfo);
                console.log('removing token')
                localStorage.removeItem('jwtToken');
                this.props.history.push('/');
            })
        }
    }

    componentDidMount() {
        try{
            const decoded = decode(localStorage.getItem('jwtToken'));
            if (decoded.exp > Date.now() / 1000) { 
                this.setState({login:true, name:decoded.sub})
                console.log(decoded)
                const { match: { params } } = this.props;
                axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
                .then(res => {
                    const userInfo = res.data;
                    console.log('movie:', userInfo)
                    this.setState({ userInfo });
                })
            }
            else
                console.log('no token')
        }catch(err) {
            console.log('reading token error')
        }
    }

    render(){
        console.log(this.state)
        const user = this.state.userInfo;
        if(!user){
            console.log('no user')
            return <div/>
        }
        if(user.movieWatchlist) console.log('moviewatch')
        return (
            <div>
                <Container style={{paddingBottom:'1em'}} />
                <Container style={{backgroundColor:'black', color:'white', paddingRight:'1em'}}>
                    <Grid style={{paddingLeft:'1em'}}>
                        <Grid.Column width={4}>
                            <Image 
                                fluid
                                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                            />
                        </Grid.Column>
                        <Grid.Column width={12} style={{paddingTop:'.5em', paddingBottom:'1em',}}>
                            <Breadcrumb>
                                <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-1em'}}>
                                    <Header style={{color:'#02c7ff', marginLeft:'1em'}}>{user.name}</Header>
                                </Breadcrumb.Section>
                                <Breadcrumb.Divider 
                                    icon={<Icon color='grey' name='right chevron' />} 
                                />
                            </Breadcrumb>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Section >
                                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>Profile Picture</p>
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider 
                                        icon={<Icon color='grey' name='right chevron' />} 
                                    />
                                    <Breadcrumb.Section link name='deleteAccount' >
                                        <p style={{color:'white'}}>Upload Picture</p>
                                    </Breadcrumb.Section>
                                    
                                </Breadcrumb>
                            </div>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Section >
                                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>Email</p>
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider 
                                        icon={<Icon color='grey' name='right chevron' />} 
                                    />
                                    {(this.state.change == 'email')? 
                                        <Form onSubmit={this.handleChange} style={{paddingLeft:'3em'}}> 
                                            <Form.Input name='newemail' placeholder='Email' onChange={this.onChange} />
                                            <Form.Input name='renewemail' placeholder='Re-enter Email' onChange={this.onChange} />
                                            <Button disabled={(this.state.newemail && this.state.newemail == this.state.renewemail)? false : true} color='blue' size='small' type='submit'>Submit</Button>
                                            <Button color='blue' name='cancel' size='small' onClick={this.editInfo}>Cancel</Button>
                                        </Form>
                                    :
                                    <Breadcrumb.Section link name='email' onClick={this.editInfo}>
                                        <p style={{color:'white'}}>Change Email</p>
                                    </Breadcrumb.Section>
                                    }
                                </Breadcrumb>
                            </div>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Section >
                                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>Password</p>
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider 
                                        icon={<Icon color='grey' name='right chevron' />} 
                                    />
                                    {(this.state.change == 'password')? 
                                        <Form onSubmit={this.handleChange} style={{paddingLeft:'3em'}}> 
                                            <Form.Input type='password' name='oldpassword' placeholder='Old Password' onChange={this.onChange} />
                                            <Form.Input type='password' name='newpassword' placeholder='New Password' onChange={this.onChange} />
                                            <Form.Input type='password' name='renewpassword' placeholder='Re-enter New Password' onChange={this.onChange} />
                                            <Button disabled={(this.state.oldpassword && this.state.newpassword && this.state.newpassword == this.state.renewpassword)? false : true} color='blue' size='small' type='submit'>Submit</Button>
                                            <Button color='blue' name='cancel' size='small' onClick={this.editInfo}>Cancel</Button>
                                        </Form>
                                    :
                                    <Breadcrumb.Section link name='password' onClick={this.editInfo}>
                                        <p style={{color:'white'}}>Change Password</p>
                                    </Breadcrumb.Section>
                                    }
                                </Breadcrumb>
                            </div>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Section >
                                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>Blacklist</p>
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider 
                                        icon={<Icon color='grey' name='right chevron' />} 
                                    />
                                    {(this.state.change == 'blacklist')? 
                                        <div>
                                            <Input placeholder='Search...' />
                                            <Input placeholder='Search...' />
                                            <Input placeholder='Search...' />
                                        </div>
                                    :
                                    <Breadcrumb.Section link name='blacklist' onClick={this.editInfo}>
                                        <p style={{color:'white'}}>Edit Blacklist</p>
                                    </Breadcrumb.Section>
                                    }
                                </Breadcrumb>
                            </div>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Section >
                                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>Account</p>
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider 
                                        icon={<Icon color='grey' name='right chevron' />} 
                                    />
                                    {(this.state.change == 'deleteAccount')? 
                                    <Form inverted onSubmit={this.handleChange} style={{paddingLeft:'3em'}}> 
                                            <Form.Input type='password' label='Please enter your password to delete your account' name='DELETE' placeholder='password' onChange={this.onChange} />
                                            <Button disabled={(this.state.DELETE)? false : true} color='blue' size='small' type='submit'>Delete</Button>
                                            <Button color='blue' name='cancel' size='small' onClick={this.editInfo}>Cancel</Button>
                                        </Form>
                                    :
                                    <Breadcrumb.Section link name='deleteAccount' onClick={this.editInfo}>
                                        <p style={{color:'white'}}>Permantly Delete Account</p>
                                    </Breadcrumb.Section>
                                    }
                                </Breadcrumb>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default SettingsPage;