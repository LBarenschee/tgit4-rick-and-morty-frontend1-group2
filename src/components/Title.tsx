import "./Title.css"
import {Link} from "react-router-dom";

export default function Title(){
    return <>
        <header>
            <img id={"rm-logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"Rick and Morty Logo"}/>
            <h1>Rick & Morty Character Gallery</h1>
            <Link to={"/gallery"}> Gallery </Link>
        </header>

    </>

}