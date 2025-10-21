import React from "react";
import {Card} from "./Card.jsx";
import {pratosPrincipais} from "../assets/cardapio.js";
import {sobremesas} from "../assets/cardapio.js";
import {bebidas} from "../assets/cardapio.js";


let array_categorias = [pratosPrincipais, sobremesas, bebidas];

export const Cards = ( {numCategoria} ) => {
    return (
        <div className="cards">
            { array_categorias[numCategoria].map((prato) => <Card prato = {prato}/>) }
        </div>
    )
}