import {useParams} from "react-router-dom";
import {Character} from "../model/Character";

import "./CharacterDetailsPage.css";



type CharacterDetailsProps = {
    characters : Character[]
}

export default function CharacterDetailsPage({characters} : CharacterDetailsProps){

    const params = useParams()
    const id = params.id
    if (id === undefined) {
        return <div>"Not a valid ID!"</div>
    }
    const character = characters.find(character => character.id === parseInt(id))
    if( character === undefined ){
        return <div>"Character does not exist!</div>
    }
    return(
        <div className={"details"}>
            <div>
            <div>{character.name}</div>
            <div><img src={character.image}/></div>

            <div>{character.gender}</div>
            <div>{character.status}</div>
            <div>{character.origin.name}</div>
            <div>{id}</div>
            </div>
            <div>{character.episode.map(ep => <div key={ep}>{ep}</div>)}</div>
        </div>

    )

}