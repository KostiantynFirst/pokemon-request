import { Component } from "react";
// import { ToastContainer } from 'react-toastify';


export default class App extends Component {

  state = {
    pokemon: null
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return (
      <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
        {this.state.pokemon && <div>This will be pokemon</div>}
      </div>
    );
  }
}
