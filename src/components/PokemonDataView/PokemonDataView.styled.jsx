import styled from "styled-components"; 

export const PokemonDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PokemonImage = styled.img`
  max-width: 340px;
  height: 200px;
`;

export const PokemonName = styled.h2`
  margin-top: 10px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

export const StatItem = styled.li`
  color: ${({ color }) => color};
  margin-bottom: 5px;
`;