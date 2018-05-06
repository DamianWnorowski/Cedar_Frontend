import React, {Component} from 'react';
import './App.css';

import { Grid,  Container,   Header,  Icon, Breadcrumb, Button, Transition, List} from 'semantic-ui-react'

class EmptyList extends Component{

    constructor(props){
        super(props);

        this.state = {
            nameHeader: this.props.nameHeader,
            text: this.props.text,
        }
    }
   
    render(){
       
           
        return(
            <div>
                <Container style={{paddingTop:'2em', paddingBottom:'1em',}}>
                    <Breadcrumb>
                        <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                            <Header style={{color:'#02c7ff', marginLeft:'2em'}}>{this.state.nameHeader}</Header>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider 
                            icon={<Icon color='grey' name='right chevron' />} 
                        />
                    </Breadcrumb>
                </Container>
                <Grid doubling columns={this.state.numShow} style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                    <Header style={{padding:'1em', color:'white', marginLeft:'2em'}}>{this.state.text}</Header>
                </Grid>
            </div>
        )
    }
}
export default EmptyList