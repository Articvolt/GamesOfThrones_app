import { useEffect, useRef, useState } from 'react';
import { Character } from '../../models/Character.ts';
import { FormContainer, StyledInput, StyledButton } from './styles.tsx';
interface Props {
  onAddCharacter: (characterToAdd: Character) => void;
}

export const AddCharacterForm = ({ onAddCharacter }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [characterToAdd, setCharacterToAdd] = useState<Partial<Character>>({});

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const onAddCharacterClick = () => {
    onAddCharacter({
      id: 0,
      name: characterToAdd.name || '',
      imageUrl: characterToAdd.imageUrl || '',
      title: characterToAdd.title || '',
      family: characterToAdd.family || '',
    });

    setCharacterToAdd({});
  };

  return (
    <FormContainer>
      Name:
      <StyledInput
        type="text"
        value={characterToAdd.name || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            name: e.target.value,
          })
        }
        ref={nameInputRef}
      />
      Image URL:
      <StyledInput
        type="text"
        value={characterToAdd.imageUrl || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            imageUrl: e.target.value,
          })
        }
      />
      Title:
      <StyledInput
        type="text"
        value={characterToAdd.title || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            title: e.target.value,
          })
        }
      />
      Family:
      <StyledInput
        type="text"
        value={characterToAdd.family || ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onAddCharacterClick();
        }}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            family: e.target.value,
          })
        }
      />
      <StyledButton onClick={() => onAddCharacterClick()}>
        Add character
      </StyledButton>
    </FormContainer>
  );
};
