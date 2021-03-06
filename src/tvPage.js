import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import * as constants from  './components/constants.js'
import "../node_modules/video-react/dist/video-react.css"; 
import MediaList from './components/mediaList.js'
import { Player } from 'video-react';
import EmptyList from './components/emptyList.js'
import CircularProgressbar from 'react-circular-progressbar'
import { 
    Grid, 
    Image,  
    Container,  
    Header,   
    Modal,
    Breadcrumb, 
    Icon,
    Form,
    TextArea,
    Button,
    Rating,
    Label
} from 'semantic-ui-react'

const imgUrl = constants.IMGURL;
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'elliot4', 'helen3']
const users2 = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'christian2', 'daniel3', 'ell1iot4', 'helen3', 'chr1is', 'chri2stian', 'dani3l', 'elliot4', 'he5len', 'chri6stian2', 'dani7el3', 'e13liot4', 'he2len3']
// const movieText = ['Gerne', 'Release Date', 'Directed By', 'Overview']
const movieTest = [
    ['Release Date', 'date'], 
    ['Directed By', 'directed'],
    ['Written By','written'],
    ['Run Time','runtime'],
    ['Studio', 'studio']];
// const movieInfo = {written:'Frankie Fry', runtime:'120min', boxoffice:'$207 million', studio:'Disney', title: MOVIES[6].title, poster_path: MOVIES[6].poster_path, genre: 'Animated', released: MOVIES[6].release_date, directed: 'John Smith', overview: MOVIES[6].overview }

const testMap = users.map(user => 
    <Grid.Column  key={user}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        fluid
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
        /> 
        </Container>
    </Grid.Column>
);


const actorMap = users.map(actor => 
    <Grid.Column  key={actor + "1"}>
        <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
        <Image 
        fluid
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
        /> 
        <Header style={{color:'#02c7ff', margin:0, paddingLeft:'.3em'}}>{actor}</Header>
        <div style={{color:'white', paddingLeft:'.3em'}}>{actor} Played</div>
        </Container>
    </Grid.Column>
);

const mediaReviews = (data) => {
    const reviews = data.map(user => 
        <Grid.Column  width={8}>
            <Grid key={user.review_id} style={{backgroundColor: 'rgba(2, 199, 255, 0.1)',padding:'0',paddingBottom:'.5em', marginTop:'1.0em',marginRight:'.0em',marginLeft:'0em', borderRight: '.3em solid rgba(2, 199, 255, 0.5)', borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',borderLeft: '.3em solid rgba(2, 199, 255, 0.5)', borderTop: '.3em solid rgba(2, 199, 255, 0.5)'}}>
                <Grid.Column width={4}>
                    <Image 
                        fluid
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' 
                    /> 
                </Grid.Column>
                <Grid.Column width={12}   >
                <div style={{marginLeft:'-1.0em',padding:0, paddingBottom:'0.2em', fontSize:'1.2em'}}>{user.author.name}</div>
                <div style={{marginLeft:'-1.5em', borderLeft: '.3em solid rgba(2, 199, 255, 0.2)',  borderTop: '.3em solid rgba(2, 199, 255, 0.2)'}}>
                <p style={{paddingLeft:'0.5em'}}>{user.body}</p>
                </div></Grid.Column>
            </Grid>
        </Grid.Column>
    );
    return reviews;
}

const movieStats = (movieInfo) =>  movieTest.map(text => 
    <Container key={text} style={{paddingTop:'.1em'}}>
        <Breadcrumb>
            <Breadcrumb.Section ><p style={{color:'#02c7ff'}}>{text[0]}</p></Breadcrumb.Section>
            <Breadcrumb.Divider icon={<Icon color='grey' name='right chevron' />} />
            <Breadcrumb.Section >{movieInfo[text[1]]}</Breadcrumb.Section>
        </Breadcrumb>
    </Container>
);

class TvPage extends Component {

    state = {
        isAdmin: false,
        movieInfo: {},
        rating: 0,
        isOpen: '',
        isReviewed: 1,
        isReviewBody: false,
        submitted: false,
        failed: false
      }

    onChange = (e) => {
        const name = e.target.name;
        if(name == 'review') this.setState({review: e.target.value})
    }

    onRate = (e, { rating, maxRating }) => {
        this.setState({ rating, isReviewed: rating })
    }
    onEdit = (e) => {
        const body = this.state.review;
        const rating = this.state.rating;
        const content_id = this.state.movieInfo.content_id;
        console.log("rate content: ", {body, rating, content_id})
        axios.post('http://localhost:8080/api/editreview?id=' + this.state.userReview.review_id,  {body, rating, content_id} )
        .then((response) => {
            console.log('review edited',response)
        })
        .catch((error) => {
            console.log('err', error.status)
        });
    }
    handleDeleteContent = (e) => {
        this.setState({isOpen: ''})
    }
    handleEditContent = (e) => {
        this.setState({isOpen: ''})
    }

    onSubmit = (e) => {
        const body = this.state.review;
        const rating = this.state.rating;
        const content_id = this.state.movieInfo.content_id;
        console.log("rate content: ", {body, rating, content_id})
        axios.post('http://localhost:8080/api/ratecontent',  {body, rating, content_id} )
        .then((response) => {
            console.log('content rated',response)
            this.setState({submitted: true})
        })
        .catch((error) => {
            console.log('err', error.status)
            this.setState({failed: true})
        });
    }
    handleModal = (e,data) => {
        this.setState({isOpen: data.name});
    }
    
    handleModalClose= () => {
        this.setState({isOpen: ''});
    }
    handleDeleteReview = (e) => {
        axios.get('http://localhost:8080/api/deletereview?id=' + this.state.userReview.review_id)
        .then((response) => {
            console.log('review deleted',response)
        })
        .catch((error) => {
            console.log('err', error.status)
        });
    
    }
  
    componentDidMount() {
        this.state.isAdmin = false;
        const { match: { params } } = this.props;
        console.log('id',params.tvId)
        axios.get(`http://localhost:8080/show?id=` + params.tvId )
        .then(res => {
            const movieInfo = res.data;
            console.log('movie:', movieInfo)
            if(movieInfo['writer']) movieInfo.written = movieInfo['writer'].name;
            if(movieInfo['director']) movieInfo.directed = movieInfo['director'].name;
            this.setState({ movieInfo });
        })
        axios.get(`http://localhost:8080/secure/verifyadmin`)
        .then(res => {
            const verifiedadmin = res.data;
            console.log("is admin?: " + verifiedadmin)
            this.state.isAdmin = true;
        })

        axios.get(`http://localhost:8080/api/getmyreviewforcurrentcontent?id=` + params.tvId )
        .then(res => {
            const userReview = res.data;
            const isReviewBody = true;
            if(userReview){
                this.setState({userReview, isReviewed:userReview.rating, isReviewBody, review: userReview.body})
                console.log('userreview:1', userReview)
            }
        })
    }

    render() {
        const {movieInfo} = this.state
        return (
            <div>
                <Container  style={{ marginTop: '6em'}} ></Container>
                <Container  style={{backgroundColor:'black', color:'white', padding:'2em'}}>
                {(this.state.isAdmin)? 
                    <Button.Group vertical floated='right'>
                        <Button name='edit' color='green' size='small' floated='right' onClick={this.handleModal} >Edit Content</Button>
                        <Button name='delete' color='red' size='small' floated='right' onClick={this.handleModal} >Delete Content</Button>
                    </Button.Group> 
                : null}
                    
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <div style={{ backgroundColor:'#02c7ff',paddingBottom:'.5em',paddingRight:'.5em',marginLeft:'-2em',marginRight:'2em', marginTop:'-4em'}}>
                                    <Image alt="example" 
                                        src={imgUrl + movieInfo.poster_path} 
                                    /> 
                                </div>
                                
                            </Grid.Column>
                            <Grid.Column width={11} style={{marginLeft:'-2em'}}>
                                <Grid >
                                    <Grid.Column width={14} >
                                        <div style={{marginLeft:'-2em',marginTop:'-3em'}}>
                                            <Header as='h1' style={{backgroundColor:'#02c7ff', fontSize: '4em', color:'Black'}}>{movieInfo.title}</Header>
                                            
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{ marginTop:'-1em',marginLeft:'0em',padding:0,paddingBottom:'2em'}}>
                                    <p style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.5)',borderBottom: '.3em solid rgba(2, 199, 255, 0.5)',padding:'.5em',paddingBottom:'.2em',paddingRight:'.2em', fontSize:'1.2em'}}>{movieInfo.description}</p>
                                    </Grid.Column>
                                    
                                </Grid>
                                <Grid stackable >
                                    <Grid.Column style={{paddingTop:0, paddingBottom:0}} width={8}>
                                        {movieStats(movieInfo)}
                                    </Grid.Column>
                                    
                                    <Grid.Column style={{ paddingTop:0, paddingBottom:0}} width={8}>
                                        <Grid inverted style={{}}>
                                            <Grid.Row style={{paddingBottom:0}}>
                                            <Grid.Column width={6} style={{padding:'1em',backgroundColor: 'rgba(2, 199, 255, 0.1)'}}>
                                                <Header textAlign='center' as='h4' style={{color:'white'}}>User Ratings</Header>
                                                <CircularProgressbar initialAnimation percentage={movieInfo.userRating} />
                                                <p style={{textAlign:'center', margin:0}}>avg. rating:</p>
                                                <p style={{textAlign:'center'}}>total ratings:</p>
                                            </Grid.Column>
                                            <Grid.Column width={6} style={{padding:'1em',backgroundColor: 'rgba(2, 199, 255, 0.2)'}}>
                                                <Header textAlign='center' as='h4' style={{color:'white'}}>Critic Rating</Header>
                                                <CircularProgressbar verticalAlign initialAnimation percentage={movieInfo.criticRating} />
                                                <p style={{textAlign:'center', margin:0}}>avg. rating:</p>
                                                <p style={{textAlign:'center'}}>total ratings:</p>
                                            </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Column width={16} style={{padding:0}}>
                                                <Container style={{paddingTop:'2em', paddingBottom:'1em',}}>
                                                    <Breadcrumb>
                                                        <Breadcrumb.Section style={{borderBottom: '.3em solid rgba(2, 199, 255, 0.5)', marginLeft:'-2em'}}>
                                                            <Header style={{color:'#02c7ff', marginLeft:'1em'}}>Leave a Review</Header>
                                                        </Breadcrumb.Section>
                                                        <Breadcrumb.Divider 
                                                            icon={<Icon color='grey' name='right chevron' />} 
                                                        />
                                                        <Breadcrumb.Section  link>
                                                            <Rating icon='star' rating={this.state.isReviewed} maxRating={5} onRate={this.onRate} />
                                                        </Breadcrumb.Section>
                                                    </Breadcrumb>
                                                </Container>
                                                <Grid  style={{borderLeft: '.3em solid rgba(2, 199, 255, 0.2)', borderBottom: '.3em  solid rgba(2, 199, 255, 0.2)'}}>
                                                    <Form onSubmit={(this.state.isReviewBody)? this.onEdit : this.onSubmit} style={{margin:0, width:'100%', padding:'.3em'}}>
                                                        {(this.state.isReviewBody)?<TextArea onChange={this.onChange} autoHeight name='review'>{this.state.userReview.body}</TextArea> : null}
                                                        {(this.state.isReviewBody)? null : <TextArea onChange={this.onChange}  autoHeight name='review' placeholder='Tell us more' ></TextArea>}
                                                        <Button type="submit" color='blue' compact size='tiny' floated='right' >{(this.state.isReviewBody)? 'Edit' : 'Post'}</Button>
                                                        {(this.state.submitted)? <Label basic color='green'>Submitted</Label> : null}
                                                        {(this.state.failed)? <Label basic color='red'>Failed</Label> : null}
                                                        {(this.state.isReviewBody)? <Button onClick={this.handleDeleteReview} color='blue' compact size='tiny' floated='right' >Delete</Button> : null}
                                                    </Form>
                                                </Grid>
                                            </Grid.Column>
                                        </Grid>
                                   </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {(movieInfo.celebrities && movieInfo.celebrities.length)? <MediaList nameHeader={'Actors'} displayInfo={actorMap} numShow={6}/> : null}
                    {(movieInfo.photos && movieInfo.photos.length)?<MediaList nameHeader={'Photos'} displayInfo={testMap} numShow={5}/> : null}
                    {(movieInfo.userReview && movieInfo.userReview.length)? <MediaList scroll nameHeader={'User Reviews'} displayInfo={mediaReviews(movieInfo.userReview)} numShow={4}/> : <EmptyList nameHeader={'User Reviews'} text={'Currently no user reviews'} />}
                    {(movieInfo.criticReview && movieInfo.criticReview.length)? <MediaList scroll nameHeader={'Critic Reviews'} displayInfo={mediaReviews(movieInfo.criticReview)} numShow={4}/> : <EmptyList nameHeader={'Critic Reviews'} text={'Currently no critic reviews'} />}
                    
                    <Modal open={(this.state.isOpen == 'delete')? true : false} >
                        <Header icon='warning' color='red' content='ATTENTION' />
                        <Modal.Content>
                          <p>You are about to delete a user's account. This action is non-reversible. Are you sure you want to proceed?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button 
                            color='red'
                            onClick={this.handleModalClose}
                          >
                            <Icon name='remove'/> Yes
                          </Button>
                          <Button 
                            color='green'
                            onClick={this.handleDeleteContent}
                          >
                            No
                          </Button>
                        </Modal.Actions>
                    </Modal>
                    <Modal open={(this.state.isOpen == 'edit')? true : false} >
                        <Header icon='warning' color='red' content='ATTENTION' />
                        <Modal.Content>
                          <p>You are about to delete a user's account. This action is non-reversible. Are you sure you want to proceed?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button 
                            color='red'
                            onClick={this.handleModalClose}
                          >
                            <Icon name='remove'/> Yes
                          </Button>
                          <Button 
                            color='green'
                            onClick={this.handleEditContent}
                          >
                            No
                          </Button>
                        </Modal.Actions>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default TvPage;
