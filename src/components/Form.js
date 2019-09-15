import  React  from 'react';
import Axios from 'axios';


export class Form extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    
    onChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        let value  =  encodeURIComponent(this.state.searchText);
        console.log(value);
        Axios.get('http://localhost:8080/search?keyword='+value).then(resp => {
            console.log("this is in erspon "+resp);
            console.log(resp)          
            this.props.searchData(resp);
        })
    }

    
    render() {
        return (
            <form method="get" onSubmit={this.onSubmit} acceptCharset="UTF-8">
                <div className="input-group container search-query">
                    <input className="form-control" onChange={this.onChange} placeholder="Search for a movie&hellip;" autoCorrect="off" autoComplete="off" name="keyword" type="search"/>
                    <span className="input-group-btn"> <button className="btn btn-success" type="submit">Search</button> </span>
                </div>
            </form>
        )
    }
}