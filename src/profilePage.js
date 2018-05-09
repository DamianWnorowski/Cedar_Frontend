import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import axios from 'axios'
import * as constants from  './components/constants.js'
import MediaList from './components/mediaList.js'
import EmptyList from './components/emptyList.js'
import MediaTable from './components/mediaTable.js'

import { 
    Grid, 
    Menu,
    List,

    Breadcrumb,
    Icon,
    Image,  
    Tab,
    Container,  
    Header, 
    Modal,
    Button,
    Form
} from 'semantic-ui-react';
const imgUrl = "https://image.tmdb.org/t/p/w500/";

const userInfoList = (userInfo, openModal) => {
    let followingCount = 0;
    if(userInfo.following) followingCount = userInfo.following.length;
    const user = [
    ['Followers', 'need to get followers'],
    ['Following', followingCount],
    ['Profile Views', userInfo.profileViews],
    ['Report User','']]

    return user.map(item => 
        <div>
            
                {(item[0] == 'Report User')? 
                <Breadcrumb>
                    
                    <Breadcrumb.Section onClick={openModal}>
                        <p style={{color:'red', marginLeft:'2em'}} >{item[0]}</p>
                    </Breadcrumb.Section>
                </Breadcrumb>
                :
                <Breadcrumb>
                    <Breadcrumb.Section >
                        <p style={{color:'#02c7ff', marginLeft:'2em'}}>{item[0]}</p>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider 
                        icon={<Icon color='grey' name='right chevron' />} 
                    />
                    <Breadcrumb.Section >
                        <p style={{color:'white'}}>{item[1]}</p>
                    </Breadcrumb.Section>
                </Breadcrumb>
                
                }
                
        </div>
    );
}
const movieInfo = constants.MOVIES;

const moviesDisplay = (moviesInfo) => moviesInfo.map(movies => 
    <Grid.Column key={movies.title + "1"}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        src={imgUrl + movies.poster_path}
        /> 
        </Container>
    </Grid.Column>
);


class ProfilePage extends Component {
    
    constructor(props){
        super(props)

        this.state = {  
            userInfo: [],
            isFollowing: false,
            isUser: false,
            isAdmin: false,
            reportModalOpen: false,
            description: "",
        }
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
    }
    
    openModal(){
        this.setState({reportModalOpen: true});
    }
    
    closeModal(){
        this.setState({reportModalOpen: false});
    }
    
    openDeleteModal(){
        this.setState({deleteModalOpen: true});
    }
    
    closeDeleteModal(){
        this.setState({deleteModalOpen: false});
    }
    
    
    componentDidMount() {    
        this.state.isAdmin = false;
        const { match: { params } } = this.props;
        axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
        .then(res => {
            const userInfo = res.data;
            console.log('movie:', userInfo)
            this.setState({userId:userInfo.id})
            this.setState({ userInfo });
        })
        axios.get(`http://localhost:8080/secure/verifyadmin`)
        .then(res => {
            const verifiedadmin = res.data;
            console.log("is admin?: " + verifiedadmin)
            this.state.isAdmin = true;
        })
        axios.get(`http://localhost:8080/secure/getuser`)
        .then(res => {
            const currentUser = res.data;
            this.setState({currentUser})
            if(currentUser.following)
            currentUser.following.map(userFollowed => {
                console.log('curr: ', this.state.userId , 'fl ',userFollowed.id)
                if(this.state.userId == userFollowed.id) {
                    console.log('i am following this user')
                    this.setState({isFollowing:true})
                }
            })
            console.log("loggedin user?:true",currentUser.name)
            console.log("loggedin user?:true",currentUser.following)
            
        })
    }
    
    handleReportUser = (e) => {
        this.setState({reportModalOpen: false})
        const {userId, description} = this.state;
        console.log("Reporting user with id: " + userId)
        console.log("For reason: " + description)
        axios.post(`http://localhost:8080/secure/reportuser`, {userId, description})
        .then(res => {
            const ans = res.data;
            console.log("reported: " + ans)
        })
    }
    
    handleDeleteUser = (e) => {
        this.setState({deleteModalOpen: false})
        const {userId} = this.state;
        console.log("Deleting user with id: " + userId)
        axios.get(`http://localhost:8080/admin/deleteuser?id=` + userId)
        .then(res => {
            const ans = res.data;
            console.log("deleted account: ", res.data)
            this.props.history.push('/404');
        })
    }
    
    handleFollow = (e) => {
        this.setState({isFollowing: !this.state.isFollowing})
        if(this.state.isFollowing){
            console.log('unfollow the user')
        }else{
            console.log('follow the user')
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render(){
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
            <Grid.Column width={5}>
                <Grid.Column width={16}>
                    <Image 
                        fluid
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                    />
                </Grid.Column>
                <Grid.Column width={16} style={{paddingTop:'.5em', paddingBottom:'1em',}}>
                    <Breadcrumb>
                        <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-1em'}}>
                            <Header style={{color:'#02c7ff', marginLeft:'1em'}}>{user.name}</Header>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider 
                            icon={<Icon color='grey' name='right chevron' />} 
                        />
                        
                        <Breadcrumb.Section  link>
                        {(this.state.isFollowing)?<Button color='blue' size='mini' onClick={this.handleFollow} >Unfollow</Button> : <Button onClick={this.handleFollow} size='mini'>Follow</Button>}
                        </Breadcrumb.Section>
                    </Breadcrumb>
                    {userInfoList(user, this.openModal)}
                    {/* <button onClick={this.openModal} className="mini ui button" margin-left="10">Report User </button> */}
                    <Modal
                        open={this.state.reportModalOpen}
                    >
                        <Header icon='flag' content='Report User' />
                        <Modal.Content>
                          <Form
                            onSubmit={this.handleReportUser}>
                                <Form.Input fluid type="text" name="description" label='Please let us know why you are reporting this user.' onChange={this.onChange}/>
                                    <Button type ='submit' color='red' inverted>
                                        <Icon name='send'/> Submit Report
                                    </Button>
                                    <Button 
                                        color='green'
                                        onClick={this.closeDeleteModal}
                                    >
                                        <Icon name='backward'/>
                                        Back
                                    </Button>
                                </Form>
                        </Modal.Content>
                      </Modal>
                    {(this.state.isAdmin)? 
                    <span>
                        <button onClick={this.openDeleteModal} className="mini ui button" margin-left="10">Delete</button>
                        <Modal open={this.state.deleteModalOpen}>
                        <Header icon='warning' color='red' content='ATTENTION' />
                        <Modal.Content>
                          <p>You are about to delete a user's account. This action is non-reversible. Are you sure you want to proceed?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button 
                            color='red'
                            onClick={this.handleDeleteUser}
                          >
                            <Icon name='remove'/> Yes
                          </Button>
                          <Button 
                            color='green'
                            onClick={this.closeDeleteModal}
                          >
                            No
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </span>
                    : null }
                    
                </Grid.Column></Grid.Column>
                <Grid.Column width={11} style={{paddingLeft:'2em', paddingTop:'0'}}>
                    {(user.movieWatchlist)? <MediaList nameHeader={'Want to See Movies'} displayInfo={moviesDisplay(user.movieWatchlist)} numShow={6}/> : <EmptyList nameHeader={'Want to See Movies'} text={'Currently no wanted movies to see'} />}
                    {(user.televisionWatchList)? <MediaList nameHeader={'Want to See TV Shows'} displayInfo={user.televisionWatchList} numShow={6}/> : <EmptyList nameHeader={'Want to See TV Shows'} text={'Currently no wanted tv shows to see'} />}
                </Grid.Column>
            </Grid>
             
            </Container>
            </div>
        )
    }

}

export default ProfilePage;