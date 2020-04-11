import React, { Component } from 'react';

import PokemonItem from './PokemonItem';

class ListOfPokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            numberOfTotalItems: null,
            nextURL: '',
            prewURL: '',
            items: []
        }
    }
    componentDidMount() {
        const offset = this.state.offset;
        this.items = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
            .then(response => response.json())
            .then(response => this.setState({
                numberOfTotalItems: response.count,
                nextURL: response.next,
                prewURL: response.previous,
                items: response.results
            }))
            .catch(err => console.error(err));
    }
    render() {
        const { items } = this.state;
        return (
            <div className={"wrap-list"}>
                {items.map((item, index) => <PokemonItem key={index} info={item} />)}
            </div>
        )
    }
}

export default ListOfPokemons;