
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
    Button, 
    Modal,
    Header,   
} from 'semantic-ui-react'
const MOVIES = constants.MOVIES;


const imgUrl = constants.IMGURL;
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
    return (
        <Grid.Row 
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
    </Grid.Row>
    )
});

const boxOfficeTable = (data) => {
    let altColor = false;
    const table = data.map(item => {
        altColor = !altColor
        return (
            <Grid.Row 
            key = {item.title+'9'}
            columns='equal'  
            className={(altColor) ? 'style2' : 'style1'}
            style={{padding:0,paddingTop:'.1em',paddingBottom:'.1em', borderLeft: '.3em solid rgba(2, 199, 255, 0.1)'}}
            >
                <Grid.Column style={{padding:0, paddingLeft:'.5em'}} textAlign='left'>
                {item.criticRating + '%'}
                </Grid.Column>
                <Grid.Column width={10} style={{padding: 0,color:'#02c7ff'}}>
                {item.title}
                </Grid.Column>
                <Grid.Column style={{padding:0, paddingRight:'.5em'}} >
                {item.boxOffice}
                </Grid.Column>
            </Grid.Row>
        )
    })
    return table;
}

const officeTable = (data) => {
    let altColor = false;
    const table = data.map(item => {
        altColor = !altColor
        return (
            <Grid.Row 
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
            </Grid.Row>
        )
    })
    return table;
}

const movieScroll = (movieInfo) =>  {
    const movies =  movieInfo.map(movies => 
        <Grid.Column  key={movies.title + "1"}>
            <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
            <Image 
            as={ Link }
            to={"/movie/" + movies.id}
            fluid
            src={imgUrl + movies.poster_path}
            /> 
            </Container>
        </Grid.Column>
    )
    return movies;
};


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            movieInfo: {},
            renderMoviesComingSoon: false,
            renderMoviesUpcoming: false,
            renderTopBoxOffice: false,
            verified: false,
        }
    }
    

    componentDidMount(){
        console.log(this.props)
        if(this.props.verified){
            this.setState({verified: true})
        }
        axios.get(`http://localhost:8080/api/moviesopeningthisweek`)
        .then(res => {
            if(res.data.length){
                const moviesComingSoon = movieScroll(res.data);
                this.setState({ moviesComingSoon, renderMoviesComingSoon: true });
            }
        })
        axios.get(`http://localhost:8080/api/comingsoontotheaters`)
            .then(res => {
            if(res.data.length){
                const moviesUpcoming = movieScroll(res.data);
                this.setState({ moviesUpcoming, renderMoviesUpcoming: true });
            }
            
        })
        axios.get(`http://localhost:8080/api/featuredmovie`)
            .then(res => {
            console.log('featured', res)
        })
        axios.get(`http://localhost:8080/api/topboxoffice`)
            .then(res => {
                if(res.data.length){
                    const topBoxOffice = boxOfficeTable(res.data);
                    this.setState({topBoxOffice, renderTopBoxOffice: true})
                }
        })
    }

    handleVerified = (e) => {
        this.setState({verified: false})
    }

    render(){
            return(
            <div>
                <Modal closeIcon size='small' open={this.state.verified} onClose={this.handleVerified} >
                    <Modal.Header>Congratulations, Welcome to Cedar!</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <Header>Your account is now verified, please log in.</Header>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
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
                            {(this.state.renderMoviesUpcoming)? <MediaList scroll nameHeader={<div>New movies<span style={{color:'white'}}>this week</span></div>} displayInfo={this.state.moviesUpcoming} numShow={5}/> : <div />}
                            {(this.state.renderMoviesComingSoon)? <MediaList scroll nameHeader={<div>Upcoming<span style={{color:'white'}}>movies</span></div>} displayInfo={this.state.moviesComingSoon} numShow={5}/> : <div />}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {(this.state.renderTopBoxOffice)? <MediaTable gridSize={12} displayInfo={this.state.topBoxOffice} numShow={6} nameHeader={<div>Top box<span style={{color:'white'}}>office</span></div>}/> : <div />}
                            <MediaTable gridSize={12} displayInfo={officeTable(tableList)} numShow={6} nameHeader={<div>New tv<span style={{color:'white'}}>tonight</span></div>}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }

}

export default Home