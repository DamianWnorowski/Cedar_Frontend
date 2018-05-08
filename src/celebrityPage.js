import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import * as constants from  './components/constants.js'
import MediaList from './components/mediaList.js'
import CircularProgressbar from 'react-circular-progressbar'
import { 
    Grid, 
    Image,  
    Container,  
    Header,   
    Breadcrumb, 
    Icon,
    Form,
    TextArea,
    Button,
    Rating,
} from 'semantic-ui-react'

const MOVIES = constants.MOVIES;
// const imgUrl = "https://image.tmdb.org/t/p/";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'elliot4', 'helen3']
// const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
const movieTest = [
    ['Highest Rated', 'highrate'], 
    ['Lowest Rated', 'lowrate'], 
    ['Birthday', 'birthday'],
    ['Birthplace','birthplace']];

const movieMap = MOVIES.map(movies => 
    <Grid.Column  key={movies.title + "1"}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        fluid
        src={imgUrl + movies.poster_path}
        /> 
        </Container>
    </Grid.Column>
);

const celebInfo = {highrate:'87% Thoroughbreds (2018)', lowrate:'6% Ouija (2014)', birthday:'January 23, 1988', birthplace:'New York'}
// const movieInfo = {written:'Frankie Fry', runtime:'120min', boxoffice:'$207 million', studio:'Disney', title: MOVIES[6].title, poster_path: MOVIES[6].poster_path, genre: 'Animated', released: MOVIES[6].release_date, directed: 'John Smith', overview: MOVIES[6].overview }

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

const movieStats = (movieInfo) =>  movieTest.map(text => 
    <Container key={text} style={{paddingTop:'.1em'}}>
        <Breadcrumb>
            <Breadcrumb.Section ><p style={{color:'#02c7ff'}}>{text[0]}</p></Breadcrumb.Section>
            <Breadcrumb.Divider icon={<Icon color='grey' name='right chevron' />} />
            <Breadcrumb.Section >{movieInfo[text[1]]}</Breadcrumb.Section>
        </Breadcrumb>
    </Container>
);

class CelebrityPage extends Component {

    state = {
        movieInfo: {},
      }
  
      componentDidMount() {
        const { match: { params } } = this.props;
            console.log("Mounted", params.movieId)
        
      }

    render() {
        const movieInfo = this.state.movieInfo   
        return (
            <div>
                <Container  style={{ marginTop: '6em'}}>
                </Container>
                <Container  style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                            <div style={{ backgroundColor:'#02c7ff',paddingBottom:'.5em',paddingRight:'.5em',marginLeft:'-2em',marginRight:'2em', marginTop:'-4em'}}>
                            <Image 
                                fluid
                                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                            /></div>
                            </Grid.Column>
                            <Grid.Column width={11} style={{marginLeft:'-2em'}}>
                                <Grid >
                                    <Grid.Column width={14} >
                                        <div style={{marginLeft:'-2em',marginTop:'-3em'}}>
                                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '4em', color:'Black'}}>Olivia Cooke</Header>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{ marginTop:'-1em',marginLeft:'0em',padding:0,paddingBottom:'2em'}}>
                                    <p style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',padding:'.5em',paddingBottom:'.2em',paddingRight:'.2em', fontSize:'1.2em'}}>
                                    Began acting with the Oldham Theatre Workshopat age10. Starred in a school production of West Side Story. Left school before completing her A-levels to play Meg Demoys in the BBC mini-series Blackout. Was offered an audition for The Secret of Crickley Hallby director Joe Ahearne on the recommendation of his friend Bill Gallagher, who directed her in her TV debut, Blackout.
                                    </p>
                                    </Grid.Column>
                                    
                                </Grid>
                                <Grid stackable >
                                    <Grid.Column style={{paddingTop:0, paddingBottom:0}} width={8}>
                                        {movieStats(celebInfo)}
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                    <MediaList nameHeader={'Photos'} displayInfo={testMap} numShow={5}/>
                    <MediaList nameHeader={'Highest Rated Movies'} displayInfo={movieMap} numShow={6}/>
                </Container>
            </div>
        )
    }
}

export default CelebrityPage;
