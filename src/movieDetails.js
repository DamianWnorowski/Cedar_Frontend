

import React, { Component } from 'react'
import './App.css'
import * as constants from  './constants.js'
import MediaList from './mediaList.js'
import GradientSVG from './gradientSVG.js'
import CircularProgressbar from 'react-circular-progressbar'
import { Grid, Image,  Container,  Header,   Breadcrumb, Icon} from 'semantic-ui-react'

const MOVIES = constants.MOVIES;
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'elliot4', 'helen3']
// const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
const movieTest = [['Genre', 'genre'], ['Release Date', 'released'], ['Directed By', 'directed'],['Written By','written'],['Box Office', 'boxoffice'],['Run Time','runtime'],['Studio', 'studio']];
const movieInfo = {written:'Frankie Fry', runtime:'120min', boxoffice:'$207 million', studio:'Disney', title: MOVIES[6].title, poster_path: MOVIES[6].poster_path, genre: 'Animated', released: MOVIES[6].release_date, directed: 'John Smith', overview: MOVIES[6].overview }

const testMap = users.map(user => 
    <Grid.Column  key={user}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        fluid
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
        /> 
        </Container>
    </Grid.Column>
);

const actorMap = users.map(actor => 
    <Grid.Column  key={actor + "1"}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        fluid
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
        /> 
        <Header style={{color:'#02c7ff', margin:0, paddingLeft:'.3em'}}>{actor}</Header>
        <div style={{color:'white', paddingLeft:'.3em'}}>{actor} Played</div>
        </Container>
    </Grid.Column>
);

const movieStats = movieTest.map(text => 
    <Container key={text} style={{paddingTop:'.1em'}}>
        <Breadcrumb>
            <Breadcrumb.Section ><p style={{color:'#02c7ff'}}>{text[0]}</p></Breadcrumb.Section>
            <Breadcrumb.Divider icon={<Icon color='grey' name='right chevron' />} />
            <Breadcrumb.Section >{movieInfo[text[1]]}</Breadcrumb.Section>
        </Breadcrumb>
    </Container>
);

class MovieDetails extends Component {
    render() {
        return (
            <div>
                <Container  style={{ marginTop: '6em'}}>
                </Container>
                <Container  style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                            <div style={{ backgroundColor:'#02c7ff',paddingBottom:'1em',paddingRight:'1em',marginLeft:'-3em',marginRight:'2em', marginTop:'-4em'}}>
                                <Image alt="example" 
                                    src={imgUrl + movieInfo.poster_path} 
                                    label={{ as: 'a', color: 'blue',size:'medium',  icon: 'play',content: 'Play Trailer', ribbon: true }}
                                /></div>
                            </Grid.Column>
                            <Grid.Column width={11} style={{marginLeft:'-2em'}}>
                                <Grid >
                                    <Grid.Column width={14} >
                                        <div style={{marginLeft:'-2em',marginTop:'-3em'}}>
                                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '4em', color:'Black'}}>{movieInfo.title}</Header>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{ marginTop:'-1em',marginLeft:'0em',padding:0,paddingBottom:'2em'}}>
                                    <p style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',padding:'.5em',paddingBottom:'.2em',paddingRight:'.2em', fontSize:'1.2em'}}>{movieInfo.overview}</p>
                                    </Grid.Column>
                                </Grid>
                                <Grid style={{marginTop:0}}>
                                    <Grid.Column width={5}>
                                        {movieStats}
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                    <CircularProgressbar initialAnimation percentage={80} />
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                    <CircularProgressbar initialAnimation percentage={20} />
                                    </Grid.Column>
                                </Grid>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <MediaList nameHeader={'Actors'} displayInfo={actorMap} numShow={6}/>
                    <MediaList nameHeader={'Photos'} displayInfo={testMap} numShow={5}/>
                </Container>
            </div>
        )
    }
}

export default MovieDetails;
