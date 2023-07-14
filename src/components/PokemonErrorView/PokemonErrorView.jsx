import errorImage from './error.jpg';
import { PokemonFaultContainer } from './PokemonErrorView.styled';

export default function PokemonFaultView({ message }) {
    return (
        <PokemonFaultContainer role="alert">
            <p>{message}</p>
            <img src={errorImage} alt="errorImage" width="240" />   
        </PokemonFaultContainer>
    )
}