// rfce
// React Function Component Export

import react from "react";
import "./App.css";
import {useState} from "react";
import {Categorias} from "./components/Categorias.jsx";
import {Cards} from "./components/Cards.jsx";
import {Banner} from "./components/Banner.jsx"

export function App () {
    
    const [numCategoria, setNumCategoria] = useState(0);

    return (
        <section class = "container">

            <Banner />

            <Categorias numCategoria = {numCategoria} setNumCategoria = {setNumCategoria}/>

            
            <Cards numCategoria = {numCategoria} />
            
        </section>
    )
}