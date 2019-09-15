import React from 'react';
import { Link } from 'react-router-dom';
import Axio from 'axios';
import Axios from 'axios';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
    }
}

    setSingleMovie = () => {
        let countries = [];
        
        Axios.get('http://localhost:8080/movieItem?netflixid='+this.props.netflixid).then(
            resp => {
                countries = resp.data.countries;
                let movieData = {
                    title: this.props.title,
                    released:  this.props.released,
                    netflixid: this.props.netflixid,
                    image: this.props.image,
                    rating: this.props.rating,
                    synopsis: this.props.synopsis,
                    countries: countries
                }
                this.props.singleMovieData(movieData);
                console.log(countries);
            }
        )
       
        console.log('this is onClick');
    }
    render() {
        return(
            // <div>
            //     <label><Link to="/singleMovie" onClick={this.setSingleMovie}>Title: {this.props.title}</Link></label><br />
            //     <p>{this.props.title}</p>
            //     <label>Released: {this.props.released}</label><br />
            //     <label>Netflix ID: {this.props.netflixid}</label><br />
            //     <label>Countries: {this.props.countries}</label><br />
            // </div>
            <div class="browse-movie-wrap col-xs-10 col-sm-5">
                <Link to="/singleMovie" onClick={this.setSingleMovie} class="browse-movie-link">
                    <figure>
                        <img class="img-responsive" src={this.props.image} alt={this.props.title} width="210" height="315" />
                        {/* <img class="quality-banner img-responsive" src=""  width="118" height="91" /> */}
                        <figcaption class="hidden-xs hidden-sm">
                            <span class="icon-star"></span>
                            <h4 class="rating">{this.props.rating}</h4>
                            <h4>Comedy</h4>
                            <h4>Drama</h4>
                            <span class="button-green-download2-big">View Details</span>
                        </figcaption>
                    </figure>
                </Link>
                <div class="browse-movie-bottom">
                    <a href="/singleMovie" class="browse-movie-title">{this.props.title}</a>
                    <div class="browse-movie-year">{this.props.released}</div>
                </div>
        </div>
        );
    }
}