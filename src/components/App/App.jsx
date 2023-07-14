import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { AppContainer } from "./App.styled";
import PokemonForm from "../PokemonFormContainer/PokemonForm";
import PokemonInfo from "../PokemonInfo/PokemonInfo";


export default class App extends Component {

  state = {
    pokemonName: ''
  }

 handleFormSubmit = pokemonName => {
  this.setState({pokemonName});
 }
   
 render() {
    return (
      <AppContainer>
       <PokemonForm onSubmit={this.handleFormSubmit} />
       <PokemonInfo pokemonName={this.state.pokemonName}/>
       <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
