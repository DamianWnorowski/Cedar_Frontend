import React, {Component} from 'react';
import './App.css';

import { Grid,  Container,   Header,  Icon, Breadcrumb, Button, Transition, List} from 'semantic-ui-react'







class MediaList extends Component{

    constructor(props){
        super(props);

        this.state = {
            numShow: this.props.numShow,
            displayInfo: this.props.displayInfo,
            nameHeader: this.props.nameHeader,
            items: this.props.displayInfo.slice(0,this.props.numShow),
            show: false,
            scroll:this.props.scroll,
            scrollStart: 0,
            scrollEnd: this.props.numShow,
            disableNext: false,
            disablePrev:false,
        }
    }
    
    scrollNext = () => {
        if(this.state.scrollEnd+this.state.numShow-1 > this.state.displayInfo.length){


            this.setState({
                items: this.state.displayInfo.slice(this.state.displayInfo.length-this.state.numShow, this.state.displayInfo.length),
                scrollStart: this.state.displayInfo.length-this.state.numShow,
                scrollEnd: this.state.displayInfo.length,
                disableNext:true,
                disablePrev:false,
            })

        }else{
            this.setState({
                items: this.state.displayInfo.slice(this.state.scrollEnd-1, this.state.scrollEnd+this.state.numShow-1),
                scrollStart: this.state.scrollEnd-1,
                scrollEnd: this.state.scrollEnd+this.state.numShow-1,
                disablePrev:false,
                
            })
        }


        
    }

    scrollPrev = () => {
        if(this.state.scrollStart-this.state.numShow+1 < 0){
            this.setState({
                items: this.state.displayInfo.slice(0, this.state.numShow),
                scrollEnd: this.state.scrollStart+1,
                scrollStart: 0,
                disablePrev:true,
                disableNext:false,
                
            })

        }else{
            this.setState({
                items: this.state.displayInfo.slice(this.state.scrollStart-this.state.numShow+1, this.state.scrollStart+1 ),
                scrollEnd: this.state.scrollStart+1,
                scrollStart: this.state.scrollStart-this.state.numShow+1,
                disableNext:false,

                
            })
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
        if(this.state.scroll){
            return(
                <div>
                    <Container style={{paddingTop:'2em', paddingBottom:'1em',}}>
                        <Breadcrumb>
                            <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                                <Header style={{color:'#02c7ff', marginLeft:'2em'}}>{this.state.nameHeader}</Header>
                            </Breadcrumb.Section>
                            
                            
                        </Breadcrumb>
                    </Container>
                    <Grid doubling columns={this.state.numShow} style={{position: 'relative',borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                    
                    {this.state.items}
                    
                    <div>
                    <div style={{left: '10px', position: 'absolute', top: '50%',transform: 'translate(-50%, -50%)'}}>
                    {(this.state.scrollStart === 0) ? null :
                        <Button  
                            onClick={this.scrollPrev}
                            style={{backgroundColor:'rgba(2, 199, 255, 0.4)'}} 
                            circular 
                            inverted 
                            color='blue' 
                            icon={<Icon name='left chevron' />} >
                        </Button>
                    }
                    </div>
                    <div style={{right: '-30px', position: 'absolute', top: '50%',transform: 'translate(-50%, -50%)'}}>
                    {this.state.scrollEnd === this.state.displayInfo.length ? null : 
                    <Button  
                        onClick={this.scrollNext}
                        style={{backgroundColor:'rgba(2, 199, 255, 0.4)'}} 
                        circular 
                        inverted 
                        color='blue' 
                        icon={<Icon name='right chevron'  />} >
                    </Button>
                    }
                    </div>
                    </div>
                    
                    </Grid>
                    {/* <div style={{position: 'absolute', top:0, left:0}}>
                    </div> */}
                    
                    </div>
            )
        }else{
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
}
export default MediaList