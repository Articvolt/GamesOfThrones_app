import { Character } from '../../models/Character.ts';
import { DetailsContainer, CharacterImage, CharacterInfo } from './styles.tsx';

interface Props {
  character: Character;
}

export const CharacterDetails = ({ character }: Props) => {
  return (
    <DetailsContainer>
      <CharacterImage alt={character.name} src={character.imageUrl} />
      <CharacterInfo>
        {character.id}) <b>{character.name}</b>
      </CharacterInfo>
      <CharacterInfo>Family: {character.family}</CharacterInfo>
      <CharacterInfo>Title: {character.title}</CharacterInfo>
    </DetailsContainer>
  );
};
