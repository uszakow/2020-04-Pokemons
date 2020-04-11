import React, { Component } from 'react';

class PokemonItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoURL: '',
            height: null,
            weight: null,
            types: null,
            stats: {},
        }
    }
    giveClassName(nameOfCharacteristic, number) {
        const low = "low-level characteristic";
        const middle = "middle-level characteristic";
        const high = "high-level characteristic";

        switch (nameOfCharacteristic) {
            case "height":
                if (number < 9) {
                    return low;
                } else if (number > 16) {
                    return high;
                } else {
                    return middle;
                }
            case "weight":
                if (number < 200) {
                    return low;
                } else if (number > 800) {
                    return high;
                } else {
                    return middle;
                }
            case "speed":
                if (number < 50) {
                    return low;
                } else if (number > 90) {
                    return high;
                } else {
                    return middle;
                }
            case "attack":
            case "defense":
                if (number < 40) {
                    return low;
                } else if (number > 70) {
                    return high;
                } else {
                    return middle;
                }
        }
        return null;
    }
    componentDidMount() {
        const url = this.props.info.url;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const stats = response.stats;
                const statsForDisplay = {};

                for (let key of stats) {
                    statsForDisplay[key.stat.name] = key.base_stat;
                }

                return this.setState({
                    photoURL: response.sprites.front_default,
                    height: response.height,
                    weight: response.weight,
                    types: response.types,
                    stats: statsForDisplay
                })
            })
            .catch(err => console.error(err));
    }
    render() {
        const name = this.props.info.name;
        const nameUpper = name[0].toUpperCase() + name.slice(1);

        const { photoURL, height, weight, types, stats } = this.state;

        return (
            <div className="wrap-item">
                <img src={photoURL} alt="name" />
                <h4>{nameUpper}</h4>
                <table><tbody>
                    <tr>
                        <td>Wysokość: </td>
                        <td
                            className={this.giveClassName("height", height)}>
                            {height}
                        </td>
                    </tr>
                    <tr>
                        <td>Waga: </td>
                        <td
                            className={this.giveClassName("weight", weight)}>
                            {weight}
                        </td>
                    </tr>
                    <tr>
                        <td>Szybkość:  </td>
                        <td
                            className={this.giveClassName("speed", stats.speed)}>
                            {stats.speed}
                        </td>
                    </tr>
                    <tr>
                        <td>Atak: </td>
                        <td
                            className={this.giveClassName("attack", stats.attack)}>
                            {stats.attack}
                        </td>
                    </tr>
                    <tr>
                        <td>Obrona: </td>
                        <td
                            className={this.giveClassName("defense", stats.defense)}>
                            {stats.defense}
                        </td>
                    </tr>
                </tbody></table>
                <h5>Klasyfikacja:</h5>
                {!types || types.map((item, index) => {
                    return <div key={index}>{item.type.name}</div>
                })}
            </div>
        )
    }
}

export default PokemonItem;