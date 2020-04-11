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
            items: [],
            code: null,
        }
    }
    getInfo = (filter) => {
        if (filter === 0) {
            const offset = this.state.offset;
            fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        numberOfTotalItems: response.count,
                        nextURL: response.next,
                        prewURL: response.previous,
                        items: response.results,
                        code: filter
                    })
                }
                )
                .catch(err => console.error(err));
        } else {
            fetch(`https://pokeapi.co/api/v2/type/${filter}`)
                .then(response => response.json())
                .then(response => {
                    const temp = response.pokemon;
                    const result = [];
                    temp.forEach(item => {
                        result.push(item.pokemon)
                    })
                    this.setState({
                        numberOfTotalItems: null,
                        nextURL: '',
                        prewURL: '',
                        items: result,
                        code: filter
                    })
                })
                .catch(err => console.error(err));
        }
    }
    render() {
        const { items, code } = this.state;
        const { filter } = this.props;        
        if (code !== filter) {
            this.getInfo(filter);
        }
        return (
            <div className={"wrap-list"}>               
                {!items || items.map((item, index) => <PokemonItem key={index} info={item} />)}
            </div>
        )
    }
}

export default ListOfPokemons;