import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopBoxOffice from './topBoxOffice.js'
import * as constants from  './constants.js'
import MediaList from './mediaList.js'
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
const user = [['Email','JennD@gmail.com'], 
    ['Birthday', 'December 18, 1990'],
    ['Phone', '(123) 456-7890'], 
    ['Blocked Movies', 'Edit List'],
    ['Password', 'Change Password'],
    ['About', 'I love to watch movies']]

const userInfo = user.map(item => 
    <div>
        <Breadcrumb>
            <Breadcrumb.Section >
                <p style={{color:'#02c7ff', marginLeft:'2em'}}>{item[0]}</p>
            </Breadcrumb.Section>
            <Breadcrumb.Divider 
                icon={<Icon color='grey' name='right chevron' />} 
            />
            <Breadcrumb.Section  link>
                <p style={{color:'white'}}>{item[1]}</p>
            </Breadcrumb.Section>
        </Breadcrumb>
    </div>
);


const movieInfo = constants.MOVIES;

const movieTest = movieInfo.map(movies => 
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
            
        }
    }

    h

    render(){
        return (
            <div>
            <Container  style={{paddingBottom:'1em'}} >
            </Container>
            <Container style={{backgroundColor:'black', color:'white', paddingRight:'1em'}}>
            <Grid style={{paddingLeft:'1em'}}>
                <Grid.Row>
                <Grid.Column width={4}>
                    <Image 
                        fluid
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                    />
                </Grid.Column>
                <Grid.Column width={12} style={{paddingTop:'2em', paddingBottom:'1em',}}>
                    <Breadcrumb>
                        <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                            <Header style={{color:'#02c7ff', marginLeft:'2em'}}>Jennifer Demox</Header>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider 
                            icon={<Icon color='grey' name='right chevron' />} 
                        />
                        <Breadcrumb.Section  link>
                            <p style={{}}>edit</p>
                        </Breadcrumb.Section>
                    </Breadcrumb>
                    {userInfo}
                        
                </Grid.Column>
                </Grid.Row>
                <Grid.Column width={14} style={{paddingLeft:'2em', paddingTop:'0'}}>
                    <MediaList nameHeader={'Want to See Movies'} displayInfo={movieTest} numShow={6}/>
                    <MediaList nameHeader={'Rated Movies'} displayInfo={movieTest} numShow={6}/>
                </Grid.Column>
            </Grid>
             
            </Container>
            </div>
        )
    }

}

export default Profile;