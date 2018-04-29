import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopBoxOffice from './topBoxOffice.js'
import * as constants from  './constants.js'
import MediaList from './mediaList.js'
// import GradientSVG from './gradientSVG.js'
import MediaTable from './mediaTable.js'
import Profile from './profile.js'
// import CircularProgressbar from 'react-circular-progressbar'
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
const movieMap = (movies) => movies.map(movieInfo => {
    if(altColor){
        altColor = false
    }else{
        altColor = true
    }
    return(
        <Grid.Row key={movieInfo.title} style={{paddingTop: '4em', paddingBottom: '.5em'}} className={(altColor) ? 'style2' : 'style1'}>
            <Grid.Column width={4}>
                <div style={{ backgroundColor:'#02c7ff',paddingBottom:'.5em',paddingRight:'.5em',marginLeft:'-1em',marginRight:'2em', marginTop:'-4em'}}>
                    <Image alt="example" 
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



class SearchPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: {},
        }
    }

    componentDidMount(){
        const {search} = this.props.match.params
        console.log('searching: ', search);
        axios.get(`http://localhost:8080/api/search?search=` + search)
          .then(res => {
                console.log('search results: ', res.data)
                this.state.results = movieMap(res.data);
        })
    }
   

    render(){
        return (
            <div>
            <Container  style={{paddingBottom:'1em'}} >
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
                        <Grid>
                            {this.state.results}
                        </Grid>
                    </Grid.Column>
                    
                </Grid>
            </Container>
            </div>
        )
    }

}

export default SearchPage;