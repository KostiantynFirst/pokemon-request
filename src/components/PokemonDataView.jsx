
export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
    return (
    <div>
        <img 
            src={sprites.other['official-artwork'].front_default} 
            alt="name" 
            width="240"
            heigh="100"
        />
        <h2>{name}</h2>
        <ul>
            {stats.map(entry => {
                <li key={entry.stats.name}>
                    {entry.stats.name}: {entry.base_stat}
                </li>
            })}
        </ul>
    </div>
    )
    
}