// PascalCase
// camelCase

// rafec
// React Arrow Function Export Conponent

import React from "react";
import {useState} from "react";
import {Cards} from "./Cards.jsx"



export const Categorias  = ({numCategoria, setNumCategoria}) => {

    return (
        <div class="categorias">
            <button className={"categoria " + (numCategoria === 0 ? "categoria--selecionada" : "")} id = "pratos-principais" onClick={() => setNumCategoria(0)}>Pratos Principais</button>

            <button className={"categoria " + (numCategoria === 1 ? "categoria--selecionada" : "")} id = "sobremesas" onClick = {() => setNumCategoria(1)}>Sobremesas</button>
            
            <button className={"categoria " + (numCategoria === 2 ? "categoria--selecionada" : "")} id = "bebidas" onClick = {() => setNumCategoria(2)}>Bebidas</button>
        </div>
    )
};