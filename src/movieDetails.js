

import React, { Component } from 'react';
import './App.css';
import * as constants from  './constants.js'

import Nav from './nav.js'
import { Grid, Image, Input, Button, Container, Menu, List, Header,Divider, Transition, Segment, Label, Breadcrumb, Icon} from 'semantic-ui-react'

const MOVIES = constants.MOVIES;
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian', 'daniel', 'elliot', 'helen']
const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
const movieTest = [['Gerne', 'genre'], ['Release Date', 'released'], ['Directed By', 'directed'], ['Overview', 'overview']];
const actorNum = constants.ACTORSNUM;

class MovieDetails extends Component {
    state = {
        actors: users.slice(0,actorNum)
    }

    showAllActors = () => this.setState({ actors: users.slice(0, users.length) })

    hideAllActors = () => this.setState({ actors: this.state.actors.slice(0, actorNum) })

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { actors } = this.state
        let properties1 = {movies: MOVIES, title: 'Featured', num: 0}; 
        const movieInfo = {title: MOVIES[6].title, poster_path: MOVIES[6].poster_path, genre: 'Animated', released: MOVIES[6].release_date, directed: 'John Smith', overview: MOVIES[6].overview }
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
                                        <div style={{marginLeft:'-2em',marginTop:'-2.5em'}}>
                                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '4em', color:'Black'}}>{movieInfo.title}</Header>
                                        </div>
                                    </Grid.Column>
                                </Grid>

                                {movieTest.map(text => (
                                    <Container style={{paddingTop:'.5em'}}>
                                        <Breadcrumb>
                                            <Breadcrumb.Section ><p text style={{color:'#02c7ff'}}>{text[0]}</p></Breadcrumb.Section>
                                            <Breadcrumb.Divider icon={<Icon color='grey' name='right chevron' />} />
                                            <Breadcrumb.Section >{movieInfo[text[1]]}</Breadcrumb.Section>
                                        </Breadcrumb>
                                </Container>
                                ))}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container style={{paddingTop:'1em', paddingBottom:'1em',}}>
                        <Breadcrumb >
                            <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                                <Header style={{color:'#02c7ff', marginLeft:'2em'}}>Actors</Header>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider 
                                icon={<Icon color='grey' name='right chevron' />} 
                            />
                            <Breadcrumb.Section  link>
                                <a onClick={(actors.length == actorNum)? this.showAllActors : this.hideAllActors} 
                                    style={{color:'white'}}>{(actors.length == actorNum)? 'Show All' : 'Hide'}
                                </a>
                            </Breadcrumb.Section>
                        </Breadcrumb>
                    </Container>
                    <Grid doubling columns={6} style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                        {actors.map(actor => (
                        <Grid.Column  >
                            <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
                            <Image 
                            fluid
                            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                            /> 
                            <Header style={{color:'#02c7ff', margin:0, paddingLeft:'.3em'}}>{actor}</Header>
                            <div style={{color:'white', paddingLeft:'.3em'}}>{actor} Played</div>
                            </Container>
                        </Grid.Column>
                        ))}
                    </Grid>
                    <Container style={{paddingTop:'2em', paddingBottom:'1em',}}>
                        <Breadcrumb>
                            <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                                <Header style={{color:'#02c7ff', marginLeft:'2em'}}>Photos</Header>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider 
                                icon={<Icon color='grey' name='right chevron' />} 
                            />
                            <Breadcrumb.Section  link>
                                <a 
                                    style={{color:'white'}}>{(actors.length == actorNum)? 'Show All' : 'Hide'}
                                </a>
                            </Breadcrumb.Section>
                        </Breadcrumb>
                    </Container>
                    <Grid doubling columns={6} style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                        {actors.map(actor => (
                        <Grid.Column  >
                            <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
                            <Image 
                            fluid
                            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                            /> 
                            </Container>
                        </Grid.Column>
                        ))}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default MovieDetails;
