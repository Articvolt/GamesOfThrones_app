import './App.css'
import {Title} from "./components/Title/Title";
import {CharactersList} from "./components/CharactersList/CharactersList";

function App() {
    return (
        <>
            <Title title="Liste des personnages de GOT"/>
            <CharactersList />
        </>
    )
}

export default App
