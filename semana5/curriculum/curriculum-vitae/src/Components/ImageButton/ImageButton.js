import React from 'react';
import './ImageButton.css'

function ImageButton(props){
    return(
        <div className="botao">
            <button className="botao"><img src={props.img} alt="botao" />{props.texto}</button>
        </div>
    )
}

export default ImageButton