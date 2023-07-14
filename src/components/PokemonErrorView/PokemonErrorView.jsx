import { PokemonFaultContainer, ErrorMessage, ErrorImage } from './PokemonErrorView.styled';
import errorImage from "./error.jpg";

export default function PokemonFaultView({ message }) {
    return (
        <PokemonFaultContainer role="alert">
            <ErrorMessage>{message}</ErrorMessage>
            <ErrorImage src={errorImage} alt="errorImage" width="240" />   
        </PokemonFaultContainer>
    )
}