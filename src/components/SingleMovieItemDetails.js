import  React  from 'react';
import { Form } from './Form'
import { Form2 } from './Form2'

export class SingleMovieItemDetails extends React.Component {

    componentDidMount() {
        console.log('This is in single movie item');
    }
    render() {
        return(
            // <div>
            //     <h1>Title: {this.props.data.title}</h1>
            //     <h1>Released: {this.props.data.released}</h1>
            //     <h1>Netflix Id: {this.props.data.netflixid}</h1>
            //     <h1>Avalabile in: {this.props.data.countries}</h1>
            // </div>
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
            
          
            <ul class="nav-links">
                <li><a href="http://localhost:3000"> Home </a></li>
            </ul>
          </div>
          <div className="nav-mobile-buttons hidden-md hidden-lg">
            <a class="touchable" href="http://localhost:3000"> <span class="glyphicon glyphicon-list-alt"></span> </a>
          </div>
        </header>
        <br /><br /><br />
            <div className="container" id="movie-content" itemScope itemType="http://schema.org/Movie">
        <div className="row">
          <div id="mobile-movie-info" className="visible-xs col-xs-20">
            <h1 itemProp="name">{this.props.movieData.title}</h1>
            <h2>2019</h2>
          </div>
          <div id="movie-poster" className="col-xs-10 col-sm-6 col-lg-5">
            <img className="img-responsive" itemProp="image" src={this.props.movieData.image} alt={this.props.movieData.title} />
            <div className="addthis_sharing_toolbox" style={{marginTop: '15px'}} />
          </div>
          <div className="modal modal-download hidden-xs hidden-sm">
            <div className="modal-container">
              <div className="modal-title"> Select movie quality </div>
              <span className="modal-close glyphicon glyphicon-remove" />
             
            </div>
          </div>
          <div id="movie-info" className="col-xs-10 col-sm-14 col-md-7 col-lg-8 col-lg-offset-1" data-movie-id={13435}>
            <div className="hidden-xs">
              <h1>{this.props.movieData.title}</h1>
              <h2>{this.props.movieData.released}</h2>
            </div>
            <div className="bottom-info">
              <div className="rating-row" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                <a className="icon" href="https://www.imdb.com/title/tt6565702/" title="IMDb Rating" target="_blank"> <img src="/assets/images/website/logo-imdb.svg" alt="IMDb Rating" /> </a>
                <span itemProp="ratingValue">{this.props.movieData.rating}</span>
                <span itemProp="bestRating" style={{display: 'none'}}>10</span>
                <span itemProp="ratingCount" style={{display: 'none'}}>72790</span>
                <span className="hidden-xs icon-star" />
              </div>
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                        .fddc {\n                        top:10px;margin:0;padding:5px;width:280px;text-align:center;background:#509B2F; color: #fff; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: block; font-weight: bold; font-size: 16px; position: relative; transition: all 300ms ease;\n                        }\n                        .v211 {\n                        margin-top: 20px;\n                        }\n                     " }} />
            </div>
          </div>
        </div>
        <div className="modal modal-parental-guide hidden-xs hidden-sm">
          <div className="modal-container">
            <div className="modal-title"> Parental Guide </div>
            <span className="modal-close glyphicon glyphicon-remove" />
            <div className="modal-content">
              <div className="modal-loading-content">
                <img src="/assets/images/website/ajax-spinner.gif" alt="ajax spinner loading" />
                <p className="info-msg"> Loading, please wait </p>
              </div>
            </div>
          </div>
        </div>
        <div id="movie-sub-info" className="row">
          <div id="synopsis" className="col-sm-10 col-md-13 col-lg-12">
            <h3>Synopsis</h3>
            <p className="hidden-sm hidden-md hidden-lg"> {this.props.movieData.synopsis} </p>
            <p className="hidden-xs"> {this.props.movieData.synopsis} </p>
            <p className="row"> <span className="green-text-link parental-guide-modal">Countries Available In: </span> {this.props.movieData.countries} </p>
            {/* <p className="row hidden-sm hidden-md hidden-lg"> <span className="green-text-link parental-guide-modal">Countries Available In: </span> {this.props.movieData.countries} </p> */}
          </div>
        </div>
        <div id="movie-tech-specs" className="row">
          <h3 className="hidden-xs hidden-sm col-md-5"></h3>
          <div className="tech-spec-info col-xs-20 ">
            <div className="row">
              <div>
                <div />
              </div>
              <div >
                
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
            </div>
            <div className="row">
              <div className="tech-spec-element col-xs-20 col-sm-10 col-md-5">
                <span title="Subtitles" className="glyphicon glyphicon-subtitles" /> <a href="http://www.yifysubtitles.com/movie-imdb/tt6565702" target="_blank">Subtitles</a>
                <div className="hidden-md hidden-lg" />
              </div>
              <div className="tech-spec-element col-xs-20 col-sm-10 col-md-5">
                <span title="Frame Rate" className="icon-film" /> 23.976 fps
                <div className="hidden-md hidden-lg" />
              </div>
              <div className="tech-spec-element col-xs-20 col-sm-10 col-md-5">
                <span title="Runtime" className="icon-clock" /> 1hr 53 min
                <div className="visible-xs" />
              </div>
              <div className="tech-spec-element col-xs-20 col-sm-10 col-md-5"> <span title="Peers and Seeds" className="tech-peers-seeds">P/S</span> 3,069 / 10,773 </div>
            </div>
          </div>
            <div>      
          </div>
        </div>
      </div>
      </div>
        )
    }
}