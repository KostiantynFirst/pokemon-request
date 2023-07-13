import errorImage from './error.jpg';

export default function PokemonFaultView({ message }) {
    return (
        <div role="alert">
            <p>{message}</p>
            <img src={errorImage} alt="errorImage" width="240" />   
        </div>
    )
}