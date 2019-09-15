import React from 'react';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MovieItem } from './MovieItem';
import { Form } from './Form'
import { Form2 } from './Form2'

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieData:[],
      countries: []
    };
    console.log('this is the constructor! ');
  }

componentWillReceiveProps(nextProps) {
    this.setState({movieData: nextProps.data});
}

  componentDidUpdate() {
    console.log("componentDidUpdate-----"+this.state.movieData);
  }

  singleMovieData = (data) => {
    this.props.singleMovieData(data)
  }

  setMovieData = (data) => {
    this.props.searchMovie(data);
  }

  setSearchData = (data) => {
    this.props.searchMovie(data)
  }

  render() {
    const elements = this.state.movieData.map(element => {
      return ( <MovieItem title={element.title} released={element.released} netflixid= {element.netflixid} countries={element.countries} singleMovieData={this.singleMovieData} image={element.image} rating={element.rating} synopsis={element.synopsis} /> )
   });

    return (
    //  <div>
    //    <Form searchData={this.setMovieData}/>
    //     { elements }
    //     </div>

        <div>
        <header className="nav-bar">
          <div className="nav-logo pull-left">
          <a href="http://localhost:3000"></a>
          </div>
          <span className="header-slogan pull-left"></span>
          <div className="main-nav-links hidden-sm hidden-xs">
            {/* <form method="GET" action="http://localhost:3000/search?" acceptCharset="UTF-8" id="quick-search" name="quick-search">
              <div id="quick-search-container">
                <input id="quick-search-input" name="query" autoComplete="off" type="search" defaultValue="Quick search" />
                <div className="ajax-spinner" />
              </div>
            </form> */}
            <Form2 searchData={this.setSearchData} />
            <ul class="nav-links">
                <li><a href="http://localhost:3000"> Home </a></li>
            </ul>
          </div>
          <div className="nav-mobile-buttons hidden-md hidden-lg">
            <a className="touchable" id="mobile-search-btn" href="javascript:void(0)"> <span className="glyphicon glyphicon-search" /> </a>
            <a class="touchable" href="http://localhost:3000"> <span class="glyphicon glyphicon-list-alt"></span> </a>
          </div>
        </header>
        <div id="background-image" style={{background: 'url(https://img.yts.lt/assets/images/movies/godzilla_king_of_the_monsters_2019/background.jpg) no-repeat center center', backgroundSize: 'cover', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover'}} />
        <div id="background-overlay" />
        <div className="main-content">
          <div id="mobile-search-input" className="hidden-md hidden-lg">
            {/* <form method="POST" action="https://localhost:3000?search" acceptCharset="UTF-8">
              <input name="_token" type="hidden" />
              <div className="input-group container search-query">
                <input className="form-control" placeholder="Search for a movie…" autoCorrect="off" autoComplete="off" name="keyword" type="search" />
                <span className="input-group-btn"> <button className="btn btn-success" type="submit">Search</button> </span>
              </div>
            </form> */}
            <Form searchData={this.setSearchData} />
          </div>
          <noscript>
            &lt;div class="container"&gt;
            &lt;div class="row"&gt;
            &lt;div class="col-xs-20 text-center"&gt;
            &lt;p class="no-javascript-warning"&gt;Javascript not supported on your browser, please enable Javascript in order to fully utilize the website&lt;/p&gt;
            &lt;/div&gt;
            &lt;/div&gt;
            &lt;/div&gt;
          </noscript>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n            .nbox-bordered {\n                background-color: black;\n                border: 5px solid #75c74e;\n                padding: 0 35px 5px 35px;\n                max-width: 1140px;\n                margin-left: auto;\n                margin-right: auto;\n            }\n\n            .nbox-bordered h1,\n            .nbox-bordered p {\n                color: white;\n                font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n                text-align: center;\n            }\n\n            .nbox-bordered p {\n                line-height: 30px;\n                width: auto;\n                margin-bottom: 10px;\n            }\n\n            .nbox-bordered .title {\n                margin-top: 5px;\n                width: 80%;\n                border-bottom: 1px solid grey;\n                margin-left: auto;\n                margin-right: auto;\n                margin-bottom: 5px;\n            }\n\n            .nbox-bordered .title h1 {\n                font-size: 40px;\n                margin-top: 0px;\n                margin-bottom: 0px;\n            }\n\n            .nbox-bordered .title img {\n                position: relative;\n                top: 65px;\n                left: 175px;\n            }\n\n            .nbox-bordered .blue {\n                margin-top: 10px;\n                margin-bottom: 10px;\n                font-weight: bold;\n                color: #4c96d0;\n            }\n\n            .nbox-bordered a {\n                text-decoration: none;\n            }\n\n            .nbox-bordered .button {\n                background-color: #75c74e;\n                width: 250px;\n                margin-left: auto;\n                margin-right: auto;\n                margin-top: 15px;\n                border-radius: 5px;\n            }\n\n            .nbox-bordered .button img {\n                float: left;\n                margin-top: 8px;\n                margin-left: 22px;\n            }\n\n            .nbox-bordered .button p {\n                padding: 3px 0;\n                text-shadow: 2px 2px #4b9924;\n                font-weight: bold;\n            }\n        " }} />
          <div className="container home-content">
            <div className="row">
              <h1>Movies Available on Netflix</h1>
              <p>
                Welcome to <b>World - Netflix</b> website. Here you will be able to browse the movies available on different regions on Netflix.
              </p>
            </div>
          </div>
          <div className="content-dark">
            <div className="container home-content">
              <div className="home-movies">
                <div className="row">
                  <h2>Movies</h2>
                </div>
                <div className="row">
                 { elements }
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-xs-20">
                  <ul className="text-center">
                    <li>By using this site you agree to and accept our <a href="#">User Agreement.</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
