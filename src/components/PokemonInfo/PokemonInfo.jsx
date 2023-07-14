import { Component } from "react";
import PokemonFaultView from "../PokemonErrorView/PokemonErrorView";
import PokemonDataView from "../PokemonDataView/PokemonDataView";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";

export default class PokemonInfo extends Component {

    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {

        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if(prevName !== nextName) {
            console.log('pokemon name changed');

            this.setState({ status: 'pending' })
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(new Error(`${nextName} pokemon doesn't exist`))
            })
            .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }))

        }
    }

    render() {

    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props; 

    if(status === 'idle') {
        return <div>Enter pokemon name</div>
    }

    if(status === 'pending') {
        return <PokemonPendingView pokemonName={pokemonName}  />
    }

    if(status === 'rejected') {
        return <PokemonFaultView message={error.message} />
    }

    if(status === 'resolved') {
        return <PokemonDataView pokemon={ pokemon } />
    }

        // return (
        //     <div>
        //         {error && <div>{error.message}</div>}
        //         {loading && <div>Loading...</div> }
        //         {!pokemonName && <div>Enter pokemon name</div>}
        //         {pokemon && 
        //             <div>
        //                 <p>{pokemon.name}</p>
        //                 <img 
        //                     src={pokemon.sprites.other['official-artwork'].front_default} 
        //                     alt="pokemonName" 
        //                     width="240" 
        //                 />
        //             </div>}
        //     </div>
        // );
    }
}