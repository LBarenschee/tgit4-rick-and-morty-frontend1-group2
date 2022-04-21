import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css";

type GalleryProps = {
     characters: Character[]
}

export default function Gallery({characters}:GalleryProps){
     return  <div className={"character-gallery"}>
          {characters.map(character => <CharacterCard key={character.id} character = {character} />)

     } </div>
}

