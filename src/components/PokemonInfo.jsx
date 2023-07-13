import { Component } from "react";

export default class PokemonInfo extends Component {

    state = {
        pokemon: null
    }

    componentDidUpdate(prevProps, prevState) {

        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if(prevName !== nextName) {
            console.log('pokemon name changed');
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(res => res.json())
            .then(pokemon => this.setState({ pokemon }));
        }
    }

    render() {
        return (
            <div>
                <h1>PokemonInfo</h1>
                {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
            </div>
        );
    }
}