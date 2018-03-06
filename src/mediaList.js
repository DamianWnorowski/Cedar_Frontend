import React, {Component} from 'react';
import './App.css';

import { Grid,  Container,   Header,  Icon, Breadcrumb} from 'semantic-ui-react'







class MediaList extends Component{

    constructor(props){
        super(props);

        this.state = {
            numShow: this.props.numShow,
            displayInfo: this.props.displayInfo,
            nameHeader: this.props.nameHeader,
            items: this.props.displayInfo.slice(0,this.props.numShow),
            show: false
        }
    }
    
    

    showAll = () => {
        this.setState({
            items: this.state.displayInfo.slice(0, this.state.displayInfo.length),
            show: true
        })
    }

    hideAll = () => {
        this.setState({
            items: this.state.displayInfo.slice(0, this.state.numShow),
            show: false 
        })
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
                        <Breadcrumb.Section  link>
                            <p onClick={(this.state.show === false)? this.showAll : this.hideAll} 
                                style={{color:'white'}}>{(this.state.show === false)?  'Show All'  : 'Hide'} 
                            </p>
                        </Breadcrumb.Section>
                    </Breadcrumb>
                </Container>
                <Grid doubling columns={this.state.numShow} style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                   {this.state.items}
                </Grid>
            </div>
        )
    }
}
export default MediaList