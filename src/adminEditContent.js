import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import {Container,Header, Menu,Form,  Grid, Table, Icon, Button} from 'semantic-ui-react';

class AdminEditContent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeItem: 'content',
        }
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handleContent = (e) => {
        console.log('edit content')
        const id = this.state.id;
        const title = this.state.title;
        const date = this.state.date;
        const description = this.state.description;
        const poster_path = this.state.poster_path;
        const runtime = this.state.runtime;
        const studio = this.state.studio;
        const trailerPath = this.state.trailerPath;
        // const director = this.state.director;
        // const writer = this.state.writer;
        const boxOffice = this.state.boxOffice;
        const currentlyInTheaters = this.state.currentlyInTheaters;
        const userRating = this.state.userRating;
        const criticRating = this.state.criticRating;


        axios.post('http://localhost:8080/api/addmovie',  {id, title, date, description, poster_path, runtime, studio, trailerPath, director:null, writer:null, boxOffice, currentlyInTheaters, userRating, criticRating, celebrities:null, userReviews:null, criticReviews:null, genres:null} )
        .then((response) => {
            console.log('edited',response)
        })
        .catch((error) => {
            console.log('err', error.status)
        });
    }


    render(){
        return(
            <div>
                <Container  textAlign='left' style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                    <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '3em', color:'Black'}}>Add Content</Header>
                    <Form inverted onSubmit={this.handleContent} style={{paddingLeft:'3em'}}> 
                        <Form.Input label='Id' name='id' onChange={this.onChange} />
                        <Form.Input label='Title' name='title' onChange={this.onChange} />
                        <Form.Input label='Release Date' name='date' onChange={this.onChange} />
                        <Form.Input label='Description' name='description' onChange={this.onChange} />
                        <Form.Input label='Poster Path' name='poster_path' onChange={this.onChange} />
                        <Form.Input label='Runtime' name='runtime' onChange={this.onChange} />
                        <Form.Input label='Studio' name='studio' onChange={this.onChange} />
                        <Form.Input label='Trailer Path' name='trailerPath' onChange={this.onChange} />
                        <Form.Input label='Box Office' name='boxOffice' onChange={this.onChange} />
                        <Form.Input label='Currently In Theaters' name='currentlyInTheaters' onChange={this.onChange} />
                        <Form.Input label='User Rating' name='userRating' onChange={this.onChange} />
                        <Form.Input label='Critic Rating' name='criticRating' onChange={this.onChange} />


                        <Button color='blue' size='small' type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>


        )
    }



}
export default AdminEditContent;