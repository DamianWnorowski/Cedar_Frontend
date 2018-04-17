
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
    Image,  
    Container,  
    Header,   
} from 'semantic-ui-react'
const MOVIES = constants.MOVIES;

const imgUrl = "https://image.tmdb.org/t/p/";
// const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'elliot4', 'helen3']
// const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
// const movieTest = [['Genre', 'genre'], ['Release Date', 'released'], ['Directed By', 'directed'],['Written By','written'],['Box Office', 'boxoffice'],['Run Time','runtime'],['Studio', 'studio']];
const movieInfo = {written:'Frankie Fry', runtime:'120min', boxoffice:'$207 million', studio:'Disney', title: MOVIES[6].title, poster_path: MOVIES[6].poster_path, genre: 'Animated', released: MOVIES[6].release_date, directed: 'John Smith', overview: MOVIES[6].overview }

const tableItem1= {rating: '60%', title: 'cinderella', sales: '100M'}
const tableItem2= {rating: '90%', title: 'fire', sales: '150M'}
const tableItem3= {rating: '30%', title: 'twitch', sales: '20M'}
const tableItem4= {rating: '50%', title: 'all about eve', sales: '20M'}
const tableItem5= {rating: '10%', title: 'frankie', sales: '120M'}
const tableItem6= {rating: '35%', title: 'Fishng', sales: '250M'}
const tableItem7= {rating: '36%', title: 'batman', sales: '80M'}
const tableItem8= {rating: '32%', title: 'lino', sales: '2M'}
const tableItem9= {rating: '66%', title: 'batman2', sales: '60M'}
const tableItem10= {rating: '72%', title: 'pRESIDENT', sales: '212M'}
const tableList = [tableItem1, tableItem2, tableItem3, tableItem4, tableItem5, tableItem6, tableItem7, tableItem8, tableItem9, tableItem10]
let altColor = false

const tableMap = tableList.map(item =>{
    if(altColor){
        altColor = false
    }else{
        altColor = true
    }
    return (<Grid.Row 
    key = {item.title+'9'}
    columns='equal'  
    className={(altColor) ? 'style2' : 'style1'}
    style={{padding:0,paddingTop:'.1em',paddingBottom:'.1em', borderLeft: '.3em solid rgba(2, 199, 255, 0.1)'}}
    >
        <Grid.Column style={{padding:0, paddingLeft:'.5em'}} textAlign='left'>
        {item.rating}
        </Grid.Column>
        <Grid.Column width={10} style={{padding: 0,color:'#02c7ff'}}>
        {item.title}
        </Grid.Column>
        <Grid.Column style={{padding:0, paddingRight:'.5em'}} >
        {item.sales}
        </Grid.Column>
    </Grid.Row>)
});
const tableMapTv = tableList.map(item =>{
    if(altColor){
        altColor = false
    }else{
        altColor = true
    }


    return (<Grid.Row 
    key = {item.title+'9'}
    columns='equal'  
    className={(altColor) ? 'style2' : 'style1'}
    style={{padding:0,paddingTop:'.1em',paddingBottom:'.1em', borderLeft: '.3em solid rgba(2, 199, 255, 0.1)'}}
    >
        <Grid.Column style={{padding:0, paddingLeft:'.5em'}} textAlign='left'>
        {item.rating}
        </Grid.Column>
        <Grid.Column width={12} style={{padding: 0,color:'#02c7ff'}}>
        {item.title}
        </Grid.Column>

    </Grid.Row>)
});


// const testMap = users.map(user => 
//     <Grid.Column  key={user}>
//         <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
//         <Image 
//         fluid
//         src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
//         /> 
//         </Container>
//     </Grid.Column>
// );

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

const movieScroll = (movieInfo) =>  {
    const movies =  movieInfo.map(movies => 
        <Grid.Column  key={movies.title + "1"}>
            <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
            <Image 
            fluid
            src={imgUrl + movies.poster_path}
            /> 
            </Container>
        </Grid.Column>
    )
    console.log('movies' , movies)
    return movies;
};




class Home extends Component {
    
    state = {
        movieInfo: {},
        renderMoviesComingSoon: false,
        renderMoviesUpcoming: false,
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/moviesopeningthisweek`)
            .then(res => {
                console.log(res.data)
                const moviesComingSoon = movieScroll(res.data);
                this.setState({ moviesComingSoon, renderMoviesComingSoon: true });
            })
        axios.get(`http://localhost:8080/api/comingsoontotheaters`)
            .then(res => {
            console.log(res)
            const moviesUpcoming = movieScroll(res.data);
            this.setState({ moviesUpcoming, renderMoviesUpcoming: true });
        })
        axios.get(`http://localhost:8080/api/featuredmovie`)
            .then(res => {
            console.log(res)
        })
    }

    render(){
            const moviesComingSoon = this.state.moviesComingSoon;
            console.log('cs', moviesComingSoon)
            if(!this.state.renderMoviesComingSoon || !this.state.renderMoviesUpcoming){ 
                return(<div />)
            }
            return(
            <div>
                <Container  style={{backgroundColor:'black', color:'white', padding:'', marginTop:'-1em'}}>
                        <Image  fluid src={'https://wallpapersite.com/images/pages/pic_w/6573.jpg'} />
                    <Grid style={{}}>
                    <Grid.Row style={{}} >
                        <Grid.Column width={5}>
                            <div style={{left: '20%', position: 'absolute',transform: 'translate(-0%, -95%)',backgroundColor:'#02c7ff', paddingBottom:'.1em', paddingRight:'.1em'}}>
                                <Image  src={imgUrl + movieInfo.poster_path} />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5} style={{marginLeft:'-1em', marginTop:'-4em'}}>
                                <Header as='h1' style={{backgroundColor:'#02c7ff', color:'Black'}}>{movieInfo.title}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
                <Container style={{backgroundColor:'black', color:'white', padding:'2em', marginTop:'-1em'}}>
                    <Grid>
                        <Grid.Column width={10}>
                            <MediaList scroll nameHeader={<div>New movies<span style={{color:'white'}}>this week</span></div>} displayInfo={this.state.moviesUpcoming} numShow={5}/>
                            <MediaList scroll nameHeader={<div>Upcoming<span style={{color:'white'}}>movies</span></div>} displayInfo={moviesComingSoon} numShow={5}/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {/* <TopBoxOffice />     */}
                            <MediaTable gridSize={12} displayInfo={tableMap} numShow={6} nameHeader={<div>Top box<span style={{color:'white'}}>office</span></div>}/>
                            <MediaTable gridSize={12} displayInfo={tableMapTv} numShow={6} nameHeader={<div>New tv<span style={{color:'white'}}>tonight</span></div>}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }

}

export default Home