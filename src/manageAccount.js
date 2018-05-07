import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopBoxOffice from './topBoxOffice.js'
import * as constants from  './constants.js'
import MediaList from './mediaList.js'
import EmptyList from './emptyList.js'
// import GradientSVG from './gradientSVG.js'
import MediaTable from './mediaTable.js'
// import CircularProgressbar from 'react-circular-progressbar'
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
const imgUrl = "https://image.tmdb.org/t/p/w500/";

const userInfoList = (userInfo, editInfo, change) => {
    const user = [
    ['Name', 'Edit Name'],
    ['Email', 'Change Email'],
    ['Password', 'Change Password']]

    return user.map(item => 
        <div>
            <Breadcrumb>
                <Breadcrumb.Section >
                    <p style={{color:'#02c7ff', marginLeft:'2em'}}>{item[0]}</p>
                </Breadcrumb.Section>
                <Breadcrumb.Divider 
                    icon={<Icon color='grey' name='right chevron' />} 
                />
                {(change == item[0])? 
                    <div>
                        <Input placeholder='Search...' />
                        <Input placeholder='Search...' />
                        <Input placeholder='Search...' />
                    </div>
                :
                <Breadcrumb.Section link name={item[0]} onClick={editInfo}>
                    <p style={{color:'white'}}>{item[1]}</p>
                </Breadcrumb.Section>
                }
            </Breadcrumb>
        </div>
    );
}



class ManageAccount extends Component {
    
    constructor(props){
        super(props)

        this.state = {  
            userInfo: [],
            isUser: false,

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
        else if(this.state.change == 'DELETE' && this.state.DELETE == 'DELETE'){
            
            axios.post('http://localhost:8080/api/deleteaccount?id=' + this.state.userInfo.id)
            .then(res => {
                const userInfo = res.data;
                console.log('movie:', userInfo)
            })
        }
    }


    componentDidMount() {
        const { match: { params } } = this.props;
        // axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
        // .then(res => {
        //     const userInfo = res.data;
        //     console.log('movie:', userInfo)
        //     this.setState({ userInfo });
        // })
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
            <Container  style={{paddingBottom:'1em'}} >
            </Container>
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
                                    <Form.Input label='Please enter "DELETE" to confirm deletion' name='DELETE' placeholder='DELETE' onChange={this.onChange} />
                                    <Button disabled={(this.state.DELETE == 'DELETE')? false : true} color='blue' size='small' type='submit'>Delete</Button>
                                    <Button color='blue' name='cancel' size='small' onClick={this.editInfo}>Cancel</Button>
                                </Form>
                            :
                            <Breadcrumb.Section link name='deleteAccount' onClick={this.editInfo}>
                                <p style={{color:'white'}}>Permantly Delete Account</p>
                            </Breadcrumb.Section>
                            }
                        </Breadcrumb>
                    </div>





                    {/* {userInfoList(user, this.editInfo, this.state.change)} */}
                        
                </Grid.Column>
                
            </Grid>
             
            </Container>
            </div>
        )
    }

}

export default ManageAccount;