import React from 'react';
import './BigCard.css'

function BigCard(props) {
    return (
        <div className="big__card">
            <h3>{props.texto}</h3>
            <img src={props.img} alt="imagem" />
            <p className="descricao"> {props.descricao} </p>
        </div>
    )
}

export default BigCard