import React from 'react';
import './PageSection.css';



function PageSection(props){
    return (
        <div className="page-section">
            <h2 className = "titulo">{props.texto}</h2>
            { props.children }
        </div>

    )
}

export default PageSection