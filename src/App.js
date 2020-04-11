import React, { Component } from 'react';
import './App.css';

import ListOfPokemons from './components/ListOfPokemons';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0
    }
  }
  handleChange = (value) => {
    this.setState({
      filter: value
    })
  }
  render() {
    /////
    // console.log(this.state)
    /////
    const { filter } = this.state;

    return (
      <div>
        <header>
          <Filter handleChange={this.handleChange} />
        </header>
        <main>
          <ListOfPokemons filter={filter} />
        </main>
      </div >
    );
  }
}

export default App;
