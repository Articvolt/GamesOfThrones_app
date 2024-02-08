// Template.jsx ou Template.tsx
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home.page.tsx';
import { CharactersList } from '../../pages/CharactersList/CharactersList.page.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useCharacters } from '../../hooks/useCharacters.ts';
import { CharacterDetailsPage } from '../../pages/CharacterDetails/CharacterDetails.page.tsx';
import {
  Header,
  Footer,
  MainContainer,
  GlobalContainer,
} from './TemplateStyles'; // Ajustez le chemin d'importation selon votre structure de dossiers

export const Template = () => {
  const { charactersList, addCharacter } = useCharacters();

  return (
    <CharactersContext.Provider value={{ charactersList, addCharacter }}>
      <GlobalContainer>
        <Header>Header</Header>

        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </MainContainer>

        <Footer>Footer</Footer>
      </GlobalContainer>
    </CharactersContext.Provider>
  );
};
