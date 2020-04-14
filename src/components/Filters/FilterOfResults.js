import React, { Component } from 'react';

class FilterOfResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heightMax: 0,
            heightMin: 0,
            weightMax: 0,
            weightMin: 0,
            speedMax: 0,
            speedMin: 0,
            attackMax: 0,
            attackMin: 0,
            defenseMax: 0,
            defenseMin: 0,
        }
    }
    handleChange = (e, key) => {
        const result = Number(e.target.value);
        this.setState({
            [key]: result
        })
    }
    handleSubmit = (e) => {
        if (typeof this.props.handleChange === "function") {
            e.preventDefault();
            this.props.handleChange(this.state);
        }
    }
    componentDidMount() {
        if (typeof this.props.handleChange === "function") {
            this.props.handleChange(this.state);
        }
    }
    render() {
        return (
            <form className="filters" onSubmit={this.handleSubmit}>
                <div>Nie pokazywać wyników, nie odpowiadających kryteriom</div>
                <div>
                    <div>Wysokość</div>
                    <div>
                        <label>max
                        <input type="number" onChange={(e) => this.handleChange(e, "heightMax")} />
                        </label>
                        <label>min
                        <input type="number" onChange={(e) => this.handleChange(e, "heightMin")} />
                        </label>
                    </div>
                </div>
                <div>
                    <div>Waga</div>
                    <div>
                        <label>max
                        <input type="number" onChange={(e) => this.handleChange(e, "weightMax")} />
                        </label>
                        <label>min
                        <input type="number" onChange={(e) => this.handleChange(e, "weightMin")} />
                        </label>
                    </div>
                </div>
                <div>
                    <div>Szybkość</div>
                    <div>
                        <label>max
                        <input type="number" onChange={(e) => this.handleChange(e, "speedMax")} />
                        </label>
                        <label>min
                        <input type="number" onChange={(e) => this.handleChange(e, "speedMin")} />
                        </label>
                    </div>
                </div>
                <div>
                    <div>Atak</div>
                    <div>
                        <label>max
                        <input type="number" onChange={(e) => this.handleChange(e, "attackMax")} />
                        </label>
                        <label>min
                        <input type="number" onChange={(e) => this.handleChange(e, "attackMin")} />
                        </label>
                    </div>
                </div>
                <div>
                    <div>Obrona</div>
                    <div>
                        <label>max
                        <input type="number" onChange={(e) => this.handleChange(e, "defenseMax")} />
                        </label>
                        <label>min
                        <input type="number" onChange={(e) => this.handleChange(e, "defenseMin")} />
                        </label>
                    </div>
                </div>
                <button type="submit">Filtruj!</button>
            </form>
        )
    }
}

export default FilterOfResults;