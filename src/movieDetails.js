

import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import * as constants from  './constants.js'
import MediaList from './mediaList.js'
import GradientSVG from './gradientSVG.js'
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
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'elliot4', 'helen3']
// const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
const movieTest = [['Genre', 'genre'], ['Release Date', 'released'], ['Directed By', 'directed'],['Written By','written'],['Box Office', 'boxoffice'],['Run Time','runtime'],['Studio', 'studio']];
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

class MovieDetails extends Component {

    state = {
        movieInfo: {},
      }
  
      componentDidMount() {
          console.log("Mounted")
        axios.get(`http://localhost:8080/movie?id=123`)
          .then(res => {
            const movieInfo = res.data;
            console.log(movieInfo);
            this.setState({ movieInfo });
          })
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
                                <Grid stackable >
                                    <Grid.Column style={{paddingTop:0, paddingBottom:0}} width={8}>
                                        {movieStats(movieInfo)}
                                    </Grid.Column>
                                    
                                    <Grid.Column style={{ paddingTop:0, paddingBottom:0}} verticalAlign width={8}>
                                        <Grid inverted style={{}}>
                                            <Grid.Row style={{paddingBottom:0}}>
                                            <Grid.Column width={6} style={{padding:'1em',backgroundColor: 'rgba(2, 199, 255, 0.1)'}}>
                                                <Header textAlign='center' as='h4' style={{color:'white'}}>User Ratings</Header>
                                                <CircularProgressbar initialAnimation percentage={80} />
                                                <p style={{textAlign:'center', margin:0}}>avg. rating:</p>
                                                <p style={{textAlign:'center'}}>total ratings:</p>
                                            </Grid.Column>
                                            <Grid.Column width={6} style={{padding:'1em',backgroundColor: 'rgba(2, 199, 255, 0.2)'}}>
                                                <Header textAlign='center' as='h4' style={{color:'white'}}>Critic Rating</Header>
                                                <CircularProgressbar verticalAlign initialAnimation percentage={20} />
                                                <p style={{textAlign:'center', margin:0}}>avg. rating:</p>
                                                <p style={{textAlign:'center'}}>total ratings:</p>
                                            </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Column width={16} style={{padding:0}}>
                                                <Container style={{paddingTop:'2em', paddingBottom:'1em',}}>
                                                    <Breadcrumb>
                                                        <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                                                            <Header style={{color:'#02c7ff', marginLeft:'1em'}}>Leave a Review</Header>
                                                        </Breadcrumb.Section>
                                                        <Breadcrumb.Divider 
                                                            icon={<Icon color='grey' name='right chevron' />} 
                                                        />
                                                        <Breadcrumb.Section  link>
                                                            <Rating icon='star' defaultRating={1} maxRating={5} />
                                                        </Breadcrumb.Section>
                                                    </Breadcrumb>
                                                </Container>
                                                <Grid  style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                                                    <Form style={{margin:0, width:'100%', padding:'.3em'}}>
                                                        <TextArea autoHeight placeholder='Tell us more' />
                                                        <Button  color='blue' compact size='tiny' floated='right' >Post</Button>
                                                    </Form>
                                                </Grid>
                                            
        
                                            </Grid.Column>
                                        </Grid>
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
