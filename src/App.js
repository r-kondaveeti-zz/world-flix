import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Form} from './components/Form';
import Axios from 'axios';
import { Main } from './components/Main';
import { SingleMovieItemDetails } from './components/SingleMovieItemDetails';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieData:[],
      singleMovieData: {
              title: '',
              released: '',
              netflixid: '',
              countries: []
          }
      }
      Axios.get('http://localhost:8080').then(resp => {
      this.setState({movieData: resp.data.ITEMS});
      console.log(this.state.movieData);
   })
    };

  setMovieData = (data) =>{
    console.log(data.data)
    this.setState({movieData: data.data.ITEMS}, () => {
      console.log('This is setMovieData'+data);
    })
  }

  componentDidMount() {
    Axios.get('http://localhost:8080').then(resp => {
      this.setState({movieData: resp.data.ITEMS});
      console.log(this.state.movieData);
   })
    console.log('component did mount!')
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setSingleMovie = (obj) => {
    this.setState({singleMovieData: obj}, () => console.log(this.state.singleMovieData));
  }
  

  render() {
    return (
      <div>
      <Router>
        <div>
        <Route exact path='/' render={(props) => 
        { return(
          <Main data={this.state.movieData} singleMovieData={this.setSingleMovie} searchMovie={this.setMovieData}/>
        )}}
        />
        <Route exact path='/singleMovie' render = {(props) => {  
           return (<SingleMovieItemDetails movieData={this.state.singleMovieData}/>)
        }} />
        </div>
       </Router>
       </div>
    );
      }
}
