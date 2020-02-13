import React from 'react'
import './ConteudoPost.css'

function ConteudoPost(props){
    return(
        <div className="post-conteudo">
            <h5>{props.nome}</h5>
            <img className="img" src={ props.img } alt="foto" />
            {props.children}
        </div>
    )
}

export default ConteudoPost