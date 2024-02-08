// CharactersList.jsx ou CharactersList.tsx
import { useContext } from 'react';
import { AddCharacterForm } from '../../components/AddCharacterForm/AddCharacterForm.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useNavigate } from 'react-router-dom';
import {
  Title,
  StyledList,
  ListItem,
  CharacterImage,
} from './assets/styles.tsx'; // Ajustez le chemin d'importation selon votre structure de dossiers

export const CharactersList = () => {
  const { charactersList, addCharacter } = useContext(CharactersContext);
  const navigate = useNavigate();

  return (
    <>
      <Title>Game of Thrones Characters</Title>
      <AddCharacterForm onAddCharacter={addCharacter} /> <br />
      <StyledList>
        {charactersList.map((character) => (
          <ListItem
            onClick={() => navigate('/character/' + character.id)}
            key={character.id}
          >
            <CharacterImage alt={character.name} src={character.imageUrl} />
            {character.id}) <b>{character.name}</b>
          </ListItem>
        ))}
      </StyledList>
    </>
  );
};
