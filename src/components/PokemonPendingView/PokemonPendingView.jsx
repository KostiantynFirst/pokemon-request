import { PendingContainer, SpinnerIcon } from './PokemonPendingView.styled';
import pendingImage from './pending.png'
import PokemonDataView from '../PokemonDataView/PokemonDataView';

export default function PokemonPendingView({pokemonName }) {

    const pokemon = {
        name: pokemonName,
        sprites: {
          other: {
            'official-artwork': {
              front_default: pendingImage,
            },
          },
        },
        stats: [],
      };
 
    return (
        <div role="alert">
            <PendingContainer>
                <SpinnerIcon size="32" />
                 Loading...
            </PendingContainer>
        <PokemonDataView pokemon={pokemon} />
        </div>
    )
}