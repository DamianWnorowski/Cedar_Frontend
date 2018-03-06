import React, { Component } from 'react';
import './App.css';
import * as constants from  './constants.js'

import Nav from './nav.js'
import MovieDetails from './movieDetails.js';
import { Grid, Image, Input, Button, Container, Menu, List, Header,Divider, Transition, Segment, Label, Breadcrumb, Icon} from 'semantic-ui-react'

const MOVIES = constants.MOVIES;


class App extends Component {
  state = {

  }


  render() {
    const { actors } = this.state
    let properties1 = {movies: MOVIES, title: 'Featured', num: 0}; 
    const movieInfo = MOVIES[6]
    return (

      <div style={{}}>
        <Nav />
        <MovieDetails />

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <Image
              centered
              size='mini'
              src='/logo.png'
            />
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
  </div>




//       <div>
//       <div fluid style={{color:'white', backgroundColor:'black'}}>
//       <Grid container 
//        >
//         <Grid.Row style={{padding:0, paddingTop:'2rem'}}>
//           <Grid.Column width={2}>
//             Cedar
//           </Grid.Column>
//           <Grid.Column width={10}>
//             <Input
//               fluid
//               icon={{ name: 'search', circular: true, link: true }}
//               placeholder='Search...'
//             />
//             <Menu inverted  style={{backgroundColor:'black', margin:0}}>
//               <Menu.Item text color={'blue'} style={{color:'white'}} name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//               <Menu.Item text color={'blue'} style={{color:'white'}} name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
//               <Menu.Item text color={'blue'} style={{color:'white'}} name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
//             </Menu>
//           </Grid.Column>
//           <Grid.Column width={2}>
//             Cedar
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//       </div>

//       <div  style={{color:'white', backgroundColor:'red'}}>
// fghfgh
//       </div>

      
//       </div>
    );
  }
}

export default App;
