import { Component } from 'react'; 
import { ImSearch } from 'react-icons/im';
import { FormContainer, SearchInput, SearchButton } from './PokemonForm.styled';
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    }

    handleNameChange = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.error('Please, enter pokemon name');
            return;
        }
        
        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' })
    };

    render() {
        return (
            <FormContainer onSubmit={this.handleSubmit}>
                <SearchInput 
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <SearchButton type="submit">
                    <ImSearch style={{ marginRight: 8 }}/>
                    Search
                </SearchButton>

            </FormContainer >
        )
    }
}