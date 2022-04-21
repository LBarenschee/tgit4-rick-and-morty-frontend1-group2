import React, {useState} from 'react';
import './App.css';
import Title from "./components/Title";
import GalleryPage from "./pages/GalleryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import {Character} from "./model/Character";



export default function App() {

    const [characters, setCharacters] = useState<Character[]>([]);

return <BrowserRouter>
        <Routes>
            <Route path="gallery" element={<GalleryPage characters = {characters}
                setCharacters={setCharacters}/>
            }/>
            <Route path="/" element={<Title></Title>}/>
            <Route path={"character/:id"} element={<CharacterDetailsPage characters={characters} />}/>
        </Routes>
</BrowserRouter>

}


