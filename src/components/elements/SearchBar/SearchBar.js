import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
      value: '',
  }
  timeout = null;

  doSearch=(event)=>{
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);
    }, 1000);
  }
  render(){
    return(
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
         <i className="rmdb-fa-search fa fa-search" name="search" size="2x"></i>
         <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search "
          onChange={this.doSearch}
          value={this.state.value} />

        </div>
      </div>
    );
  }
}
export default SearchBar;
