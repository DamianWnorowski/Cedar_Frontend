import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import * as constants from  './components/constants.js'
import MediaList from './components/mediaList.js'
import MediaTable from './components/mediaTable.js'

import { 
    Grid, 
    List,
    Breadcrumb,
    Icon,
    Image,  
    Container,  
    Header,   
} from 'semantic-ui-react';

let altColor = false
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const picUrl = 'https://image.tmdb.org/t/p/w440_and_h660_bestv2'
const imgNf = 'http://www.sydneymusiccircle.org/images/artists/artist-65353-2000px-No_image_available.svg.png'
const movieMap = (movies, url) => movies.map(movieInfo => {
    if(altColor){
        altColor = false
    }else{
        altColor = true
    }
    return(
        <Grid.Row key={movieInfo.title} style={{paddingTop: '4em', paddingBottom: '.5em'}} className={(altColor) ? 'style2' : 'style1'}>
            <Grid.Column width={4}>
                <div style={{ backgroundColor:'#02c7ff',paddingBottom:'.5em',paddingRight:'.5em',marginLeft:'-1em',marginRight:'2em', marginTop:'-4em'}}>
                    <Image alt="example" as={Link} to={'/' + url + '/' + movieInfo.id}
                        src={imgUrl + movieInfo.poster_path} 
                    />
                </div>
            </Grid.Column>
            <Grid.Column width={12} style={{marginLeft:'-2em'}}>
                <Grid >
                    <Grid.Column width={16} >
                        <div style={{marginLeft:'-2em',marginTop:'-3em'}}>
                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '2em', color:'Black'}}>{movieInfo.title}</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={15} style={{ marginTop:'-1.5em',marginLeft:'0em',padding:0,paddingBottom:'2em'}}>
                    <p style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',padding:'.5em',paddingBottom:'.2em',paddingRight:'.2em', fontSize:'1.2em'}}>{movieInfo.description}</p>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    )
});
const celebMap = (movies, url) => movies.map(celeb => {
    if(altColor){
        altColor = false
    }else{
        altColor = true
    }
    return(
        <Grid.Row key={celeb.name} style={{paddingTop: '4em', paddingBottom: '.5em'}} className={(altColor) ? 'style2' : 'style1'}>
            <Grid.Column width={4}>
                <div style={{ backgroundColor:'#02c7ff',paddingBottom:'.5em',paddingRight:'.5em',marginLeft:'-1em',marginRight:'2em', marginTop:'-4em'}}>
                    <Image alt="example" as={Link} to={'/' + url + '/' + celeb.celeb_id}
                        src={(celeb.picture)? picUrl + celeb.picture : imgNf} 
                    />
                </div>
            </Grid.Column>
            <Grid.Column width={12} style={{marginLeft:'-2em'}}>
                <Grid >
                    <Grid.Column width={16} >
                        <div style={{marginLeft:'-2em',marginTop:'-3em'}}>
                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '2em', color:'Black'}}>{celeb.name}</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={15} style={{ marginTop:'-1.5em',marginLeft:'0em',padding:0,paddingBottom:'2em'}}>
                    <p style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',padding:'.5em',paddingBottom:'.2em',paddingRight:'.2em', fontSize:'1.2em'}}>{celeb.description}</p>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    )
});



class SearchPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: {},
            movies: [],
        }
    }

    componentDidMount(){
        const {search} = this.props.match.params
        console.log('searching: ', search);
        axios.get(`http://localhost:8080/api/search?search=` + search)
          .then(res => {
                console.log('search results: ', res.data)
                if(res.data.movies) this.setState({movies: movieMap(res.data.movies, 'movie')});
                if(res.data.tvshows) this.setState({tv: movieMap(res.data.tvshows, 'tv')});
                if(res.data.celebrities) this.setState({celeb: celebMap(res.data.celebrities, 'celebrity')})
        })
    }
   

    render(){
        return (
            <div>
            <Container  style={{paddingBottom:'1em'}} textAlign='center' >
            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Search Results</Header>
            </Container>
            <Container style={{backgroundColor:'black', color:'white'}}>
                <Grid>
                    <Grid.Column width={3}>
                    <List as='ol' size='big' >
                    <List.Item  style={{ color: '#02c7ff'}} ><p style={{color:'#02c7ff'}}>Genre <Icon color='grey' name='right chevron' /></p></List.Item>
                        <List.Item as='ol'>
                            <List.Item >Action</List.Item>
                            <List.Item >Adventure</List.Item>
                            <List.Item >Animation</List.Item>
                            <List.Item >Adventure</List.Item>
                            <List.Item >Comedy</List.Item>
                            <List.Item >Crime</List.Item>
                            <List.Item >Drama</List.Item>
                            <List.Item >Documentary</List.Item>
                            <List.Item >Horror</List.Item>
                        </List.Item>
                    </List>
                    
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Grid style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', paddingLeft:'1.5em', paddingBottom: '1.5em', paddingRight:'1em', marginRight:'0em', backgroundColor:'rgba(2, 199, 255, 0.1)'}}>
                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '2em', color:'Black' ,marginTop:'1em', marginLeft:'-.9em'}}>Movies</Header>
                            {this.state.movies}
                        </Grid>
                        <Grid style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', paddingLeft:'1.5em', paddingBottom: '1.5em', paddingRight:'1em', marginRight:'0em', backgroundColor:'rgba(2, 199, 255, 0.1)'}}>
                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '2em', color:'Black' ,marginTop:'1em', marginLeft:'-.9em'}}>TV Shows</Header>
                            {this.state.tv}
                        </Grid>
                        <Grid style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', paddingLeft:'1.5em', paddingBottom: '1.5em', paddingRight:'1em', marginRight:'0em', backgroundColor:'rgba(2, 199, 255, 0.1)'}}>
                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '2em', color:'Black' ,marginTop:'1em', marginLeft:'-.9em'}}>Celebrities</Header>
                            {this.state.celeb}
                        </Grid>
                    </Grid.Column>
                    
                    
                </Grid>
            </Container>
            </div>
        )
    }

}

export default SearchPage;