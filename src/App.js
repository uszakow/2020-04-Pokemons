import React, { Component } from 'react';
import './App.css';

import ListOfPokemons from './components/ListOfPokemons';
import FilterOfSearch from './components/Filters/FilterOfSearch';
import FilterOfResults from './components/Filters/FilterOfResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOfSearch: 0,
      filterOfResults: {}
    }
  }
  handleFilterOfSearch = (value) => {
    this.setState({
      filterOfSearch: value
    })
  }
  handleFilterOfResults = (obj) => {
    this.setState({
      filterOfResults: obj
    })
  }
  render() {
    const { filterOfSearch, filterOfResults } = this.state;

    return (
      <div>
        <header>
          <FilterOfSearch handleChange={this.handleFilterOfSearch} />
          <FilterOfResults handleChange={this.handleFilterOfResults} />
        </header>
        <main>
          <ListOfPokemons filterOfSearch={filterOfSearch} filterOfResults={filterOfResults} />
        </main>
      </div >
    );
  }
}

export default App;