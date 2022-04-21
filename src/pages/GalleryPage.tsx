import Gallery from "../components/Gallery";
import CharacterCard from "../components/CharacterCard";
import {Character} from "../model/Character";
import Title from "../components/Title";
import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {resolvePath} from "react-router-dom";



type GalleryPageProps = {
    characters : Character[]
    setCharacters : (value:Character[]) => void
}

export default function GalleryPage({characters, setCharacters}:GalleryPageProps){
    const [text, setText] = useState<string>("");

    const [filteredCharacter, setFilteredCharacter] = useState<Character[]>(characters);


    useEffect(() => {
       axios.get('https://rickandmortyapi.com/api/character')
           .then(response => response.data)
           .then(body => setCharacters(body.results))
           .catch(console.error)
    }, [])


    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    const filterCharacter = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        //filteredCharacters(characters.filter(character => character.name.includes(event.target.value)))
    }

    const filteredCharacters =
        characters.filter(characters => characters.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

    const onResetButtonClick = () => {
        setText("")
        setFilteredCharacter(characters)
    }

    return (
        <div>
            <div className="App">
                <Title/>
                <div id={"actionbar"}>
                    <input onChange={onTextChange}/>
                    <button onClick={onResetButtonClick} id="gallery-button">Reset filter</button>
                </div>
                {
                    filteredCharacters.length !== 0
                        ? <Gallery characters={filteredCharacters}/>
                        : ("This character does not exist.")
                }

            </div>
        </div>


    );
}