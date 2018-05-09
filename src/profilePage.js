import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import axios from 'axios'
import * as constants from  './components/constants.js'
import MediaList from './components/mediaList.js'
import EmptyList from './components/emptyList.js'
import MediaTable from './components/mediaTable.js'

import { Grid,  Menu,List,Breadcrumb,Icon,Image,  Tab,Container,  Header, Modal,Button,Form} from 'semantic-ui-react';
const imgUrl = "https://image.tmdb.org/t/p/w500/";

const userInfoList = (userInfo, openModal, handleModal) => {
    const user = [
    ['Followers', userInfo.followerCount],
    ['Following', userInfo.followingCount],
    ['Profile Views', userInfo.profileViews],
    ['Report User',''],
    ['Delete', '']]

    return user.map(item => 
        <div>
            
                {(item[0] == 'Report User' || item[0] == 'Delete')? 
                    <Breadcrumb>
                        {(item[0] == 'Report User')? 
                            <Breadcrumb.Section name='report' onClick={handleModal}>
                                <p style={{color:'red', marginLeft:'2em'}} >{item[0]}</p>
                            </Breadcrumb.Section>
                        :
                            <Breadcrumb.Section name='delete' onClick={handleModal}>
                                <p style={{color:'red', marginLeft:'2em'}} >{item[0]}</p>
                            </Breadcrumb.Section>
                        }
                    </Breadcrumb>
                :
                <Breadcrumb>
                    <Breadcrumb.Section name={item[0]} onClick={handleModal}>
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
            followerCount: 0,
            followingCount: 0,
            isFollowing: false,
            isUser: false,
            isAdmin: false,
            isOpen: '',
            reportModalOpen: false,
            description: "",
        }
       
    }

    handleModal = (e,data) => {
        this.setState({isOpen: data.name});
        console.log('close')
    }
    
    handleModalClose= () => {
        this.setState({isOpen: ''});
    }
    componentDidUpdate() {
        const { match: { params } } = this.props;
        console.log('UPDATED!!!!!!', params.userId, this.state.userInfo.id)
        if(params.userId != this.state.userInfo.id){
            axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
            .then(res => {
                const userInfo = res.data;
                userInfo.followingCount = 0;
                userInfo.followerCount = 0;
                if(userInfo.following) userInfo.followingCount = userInfo.following.length;
                if(userInfo.followers) userInfo.followerCount = userInfo.followers.length;
                console.log('user info:', userInfo)
                this.setState({userId:userInfo.id})
                this.setState({ userInfo });
            })
            .catch(err => {
                const errMsg = err.response.data.message;
                if(errMsg.includes("404")){
                    console.log("That user does not exist");
                    this.props.history.push('/404');
                }
            });
            axios.get(`http://localhost:8080/secure/getuser`)
        .then(res => {
            const name = res.data.name
            if(name){
                const currentUser = res.data;
                this.setState({currentUser})
                if(currentUser.following)
                currentUser.following.map(userFollowed => {
                    console.log('curr: ', this.state.userId , 'fl ',userFollowed.id)
                    if(this.state.userId === userFollowed.id) {
                        console.log('i am following this user')
                        this.setState({isFollowing:true})
                    }
                })
            }
        })
        }

    }
    componentDidMount() {    
        this.state.isAdmin = false;
        const { match: { params } } = this.props;
        axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
        .then(res => {
            const userInfo = res.data;
            userInfo.followingCount = 0;
            userInfo.followerCount = 0;
            if(userInfo.following) userInfo.followingCount = userInfo.following.length;
            if(userInfo.followers) userInfo.followerCount = userInfo.followers.length;
            console.log('user info:', userInfo)
            this.setState({userId:userInfo.id})
            this.setState({ userInfo });
        })
        .catch(err => {
            const errMsg = err.response.data.message;
            if(errMsg.includes("404")){
                console.log("That user does not exist");
                this.props.history.push('/404');
            }
        });
        axios.get(`http://localhost:8080/secure/verifyadmin`)
        .then(res => {
            const verifiedadmin = res.data;
            console.log("is admin?: " + verifiedadmin)
            this.state.isAdmin = true;
        })
        axios.get(`http://localhost:8080/secure/getuser`)
        .then(res => {
            const name = res.data.name
            if(name){
                const currentUser = res.data;
                this.setState({currentUser})
                if(currentUser.following)
                currentUser.following.map(userFollowed => {
                    console.log('curr: ', this.state.userId , 'fl ',userFollowed.id)
                    if(this.state.userId === userFollowed.id) {
                        console.log('i am following this user')
                        this.setState({isFollowing:true})
                    }
                })
                console.log("loggedin user?:true",currentUser.name)
                console.log("loggedin user?:true",currentUser.following)
            }
            
        })
    }

    followPress = (e,d) => {
        console.log('e',e.target)
        console.log('e',e.target.value)
        console.log('e',d)
        console.log('e',e)
    }
    
    handleReportUser = (e) => {
        this.setState({isOpen: ''})
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
        this.setState({isOpen: ''})
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
        if(this.state.isFollowing){
            console.log('unfollow the user')
            console.log('follow the user')
            axios.get(`http://localhost:8080/secure/unfollow?id=` + this.state.userId)
            .then(res => {
                console.log("UNFOLLOW USER #" + this.state.userId + ". RESPONSE: ", res)
                this.state.userInfo.followerCount = this.state.userInfo.followerCount - 1
                this.setState({isFollowing: !this.state.isFollowing, userInfo: this.state.userInfo})
            })
        }else{
            console.log('follow the user')
            axios.get(`http://localhost:8080/secure/follow?id=` + this.state.userId)
            .then(res => {
                console.log("FOLLOW USER #" + this.state.userId + ". RESPONSE: ", res)
                this.state.userInfo.followerCount = this.state.userInfo.followerCount + 1
                this.setState({isFollowing: !this.state.isFollowing, userInfo: this.state.userInfo})
            })
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
                    {userInfoList(user, this.openModal, this.handleModal)}
                    {/* <button onClick={this.openModal} className="mini ui button" margin-left="10">Report User </button> */}
                    <Modal
                        open={(this.state.isOpen == 'report')? true : false}
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
                                        onClick={this.handleModalClose}
                                    >
                                        <Icon name='backward'/>
                                        Back
                                    </Button>
                                </Form>
                        </Modal.Content>
                      </Modal>
                    {(this.state.isAdmin)? 
                    <span>
                        <Modal open={(this.state.isOpen == 'delete')? true : false} >
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
                            onClick={this.handleModalClose}
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
            <Modal
                size='tiny'
                onClose={this.handleModal}
                open={(this.state.isOpen == 'Followers')? true : false}
            >
                <Header icon='flag' content='Follower List' />
                <Modal.Content scrolling >
                <List selection verticalAlign='middle' >
                    {(this.state.userInfo.followerCount)? 
                        this.state.userInfo.followers.map(user => 
                        <List.Item name='item' >
                            <List.Header as={ Link } to={'/profile/' + user.id} onClick={this.handleModalClose} >{user.name}</List.Header>
                        </List.Item>
                    ) : null}
                </List>
                
                </Modal.Content>
            </Modal>

            <Modal
                size='tiny'
                onClose={this.handleModal}
                open={(this.state.isOpen == 'Following')? true : false}
            >
                <Header icon='flag' content='Follower List' />
                <Modal.Content scrolling >
                <List selection verticalAlign='middle' >
                    {(this.state.userInfo.followingCount)? 
                        this.state.userInfo.following.map(user => 
                        <List.Item name='item' >
                            <List.Header as={ Link } to={'/profile/' + user.id} onClick={this.handleModalClose} >{user.name}</List.Header>
                        </List.Item>
                    ) : null}
                </List>
                
                </Modal.Content>
            </Modal>
             
            </Container>
            </div>
        )
    }

}

export default ProfilePage;