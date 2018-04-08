import React, {Component} from 'react';
import './App.css';
import MediaTable from './mediaTable.js';

import { Grid,  Container,   Header,  Icon, Breadcrumb, Button, Transition, List} from 'semantic-ui-react'
import axios from 'axios'

let altColor = false
// const tableMap = (movieInfo) => movieInfo.map(item, i =>{
//     console.log('item', item)
//     if(altColor){
//         altColor = false
//     }else{
//         altColor = true
//     }
//     return (<Grid.Row 
//     key = {item.title+i}
//     columns='equal'  
//     className={(altColor) ? 'style2' : 'style1'}
//     style={{padding:0,paddingTop:'.1em',paddingBottom:'.1em', borderLeft: '.3em solid rgba(2, 199, 255, 0.1)'}}
//     >
//         <Grid.Column style={{padding:0, paddingLeft:'.5em'}} textAlign='left'>
//         {item.rating}
//         </Grid.Column>
//         <Grid.Column width={10} style={{padding: 0,color:'#02c7ff'}}>
//         {item.title}
//         </Grid.Column>
//         <Grid.Column style={{padding:0, paddingRight:'.5em'}} >
//         {item.sales}
//         </Grid.Column>
//     </Grid.Row>)
// });

class TopBoxOffice extends Component{
    
    

        state = {
            movieInfo: {},
        }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/topboxoffice`)
          .then(res => {
              console.log('herer')
            const movieInfo = res.data;
            console.log(movieInfo);
            this.setState({ movieInfo });
          })
      }
      
    render() {
        const movieList = [this.movieInfo, this.movieInfo,this.movieInfo,this.movieInfo ]
        console.log(movieList)
        return(
            <div>/</div>
            // <MediaTable gridSize={12} displayInfo={tableMap(movieList)} numShow={6} nameHeader={<div>Top box<span style={{color:'white'}}>office</span></div>}/>    
        )    
    }


}

export default TopBoxOffice