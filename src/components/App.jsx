import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import PokemonForm from "./PokemonForm";


export default class App extends Component {

  state = {
    pokemonName: ''
  }

 handleFormSubmit = pokemonName => {
  this.setState({pokemonName});
 }
   
 render() {
    return (
      <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
       <PokemonForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
