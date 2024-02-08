// CharactersListStyles.tsx
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 24px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CharacterImage = styled.img`
  max-width: 100px;
  margin-right: 10px;
  border-radius: 50%;
`;
