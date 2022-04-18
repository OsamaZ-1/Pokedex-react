import React from "react";
import { useState } from "react";
import Info_Table from "./Info_Table";
import "./pokedex.css";
import pokeball from "./assets/pokeball.png";

function Pokedex(){
    let [info, setInfo] = useState({});
    let [pokemon, setPokemon] = useState("");
    let [source, setSource] = useState(pokeball);

    let parseData = (data) => {
        let type = "";
        data.types.forEach((t) => {
            type += t.type.name + " ";
        });
        
        return {
            source: data.sprites.front_default,
            name: data.name,
            type: type,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defence: data.stats[2].base_stat,
            spa: data.stats[3].base_stat,
            spd: data.stats[4].base_stat,
            speed: data.stats[5].base_stat
        }
    }

    let getInfo = (event) => {
        if (event.code == "Enter"){
            fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            .then((response) => response.json())
            .then((data) => {
                let parsedData = parseData(data);
                setInfo(parsedData);
                return parsedData.source;
            })
            .then((source) => {setSource(source);})
            .catch(() => {console.log("error")});
        }
    }

    return (<>
        <div className="title_wrapper">
            <div className="title">Pokedex</div>
            <div className="search_wrapper">
                Search: <input type="text" placeholder="pokemon name" className="search"
                onKeyDown={(e) => {getInfo(e);}}
                onChange={(e) => {setPokemon(e.target.value);}}/>
            </div>
        </div>
        <div className="result_wrapper">
            <div className="image_wrapper">
                <img src={source} className="result_img"/>
            </div>
            <div className="info_wrapper">
                <Info_Table info={info}/>
            </div>
        </div>
    </>);
}

export default Pokedex;