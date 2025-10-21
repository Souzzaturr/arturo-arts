import React from "react";

export const Card = ( {prato} ) => {
    return (
        <div class = "card"> 
            <div class = "card__textos"> 
                <h2 class = "card__titulo">{ prato.nome }</h2>
                <p>{ prato.descricao }</p> 
                <p class = "card__preco">{ prato.preco }</p>     
            </div> 
            <img src={ prato.imagem } alt="desgraça" class = "card__img"/>
        </div> 
    )
}