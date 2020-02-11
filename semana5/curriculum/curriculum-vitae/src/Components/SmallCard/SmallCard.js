import React from 'react';
import './SmallCard.css'


function SmallCard(props) {
    return (
        <div className="small__card">
            <img src={props.imgEmail} alt="img-email" />
            <p><span>Email: </span>{props.email}</p>
            <img src={props.imgEndereco} alt="img-endereco" />
            <p><span>Endereço: </span>{props.endereco}</p>
        </div>

    )
}

export default SmallCard