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

    List,
    Breadcrumb,
    Icon,
    Image,  
    Tab,
    Container,  
    Header,   
} from 'semantic-ui-react';
const imgUrl = "https://image.tmdb.org/t/p/w500/";

const userInfoList = (userInfo) => {
    const user = [
    ['Profile Views', userInfo.profileViews]]

    return user.map(item => 
        <div>
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


class Profile extends Component {
    
    constructor(props){
        super(props)

        this.state = {  
            userInfo: [],
            isUser: false,

        }
    }



    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:8080/api/profile?id=` + params.userId )
        .then(res => {
            const userInfo = res.data;
            console.log('movie:', userInfo)
            this.setState({ userInfo });
        })
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
                    <Grid.Column width={4}>
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
                            <p style={{}}>Manage Account</p>
                        </Breadcrumb.Section>
                    </Breadcrumb>
                    {userInfoList(user)}
                        
                </Grid.Column></Grid.Column>
                <Grid.Column width={12} style={{paddingLeft:'2em', paddingTop:'0'}}>
                    {(user.movieWatchlist)? <MediaList nameHeader={'Want to See Movies'} displayInfo={moviesDisplay(user.movieWatchlist)} numShow={6}/> : <EmptyList nameHeader={'Want to See Movies'} text={'Currently no wanted movies to see'} />}
                    {(user.televisionWatchList)? <MediaList nameHeader={'Want to See TV Shows'} displayInfo={user.televisionWatchList} numShow={6}/> : <EmptyList nameHeader={'Want to See TV Shows'} text={'Currently no wanted tv shows to see'} />}
                </Grid.Column>
            </Grid>
             
            </Container>
            </div>
        )
    }

}

export default Profile;