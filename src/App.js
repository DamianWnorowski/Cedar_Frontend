import React, { Component } from 'react';
import './App.css';
import * as constants from  './constants.js'
import Home from './home.js'

import Nav from './nav.js'
import MovieDetails from './movieDetails.js';
import { Grid, Image, Container,  List, Header,Divider,  Segment} from 'semantic-ui-react'



class App extends Component {
  
  render() {
    return (

      <div style={{}}>
        <Nav />
        <Home />
        {/* <MovieDetails /> */}

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', }}
        >
          <Container textAlign='center'>
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
