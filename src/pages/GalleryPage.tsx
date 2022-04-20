import Gallery from "../components/Gallery";
import CharacterCard from "../components/CharacterCard";
import {Character} from "../model/Character";
import Title from "../components/Title";
import React, {ChangeEvent, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";


export default function GalleryPage(){
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);
    //const [filteredCharacter, setFilteredCharacter] = useState<Character[]>(characters);

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])


    /*   const onButtonClick = () => {
           console.log("Nice!")
           setCount(count + 1)
       }*/

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


    return (
        <div>
            <div className="App">
                <Title/>
                <div className={"actionbar"}>
                    <input onChange={onTextChange}/>
                    <input onChange={filterCharacter}/>
                </div>
                {
                    filteredCharacters.length !== 0
                        ? <Gallery characters={filteredCharacters}/>
                        : ("This character does not exist.")
                }

                <Gallery characters={filteredCharacters}/>
            </div>
        </div>


    );
}