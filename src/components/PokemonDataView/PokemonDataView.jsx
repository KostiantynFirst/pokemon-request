import { PokemonDataContainer, PokemonImage, PokemonName, StatList, StatItem  } from "./PokemonDataView.styled";

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
    return (
    <PokemonDataContainer>
        <PokemonImage 
            src={sprites.other['official-artwork'].front_default} 
            alt={name} 
            width="240"
            heigh="100"
        />
        <PokemonName>{name}</PokemonName>
        <StatList>
            {stats.map(entry => (
                <StatItem key={entry.stat.name}>
                    {entry.stat.name}: {entry.base_stat}
                </StatItem>
            ))}
        </StatList>
    </PokemonDataContainer>
    );
    
}