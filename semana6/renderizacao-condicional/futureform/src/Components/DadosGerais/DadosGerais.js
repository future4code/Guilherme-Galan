import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`




class DadosGerais extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
        <Container>
            <h2>ETAPA 1 - Dados Gerais</h2>
            <p>Nome:</p>
            <input type="text"></input>
            <p>Idade:</p>
            <input type="text"></input>
            <p>Email:</p>
            <input type="text"></input>
            <p>Qual a sua escolaridade?</p>
            <select>
                <option>Ensino Médio incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
        </Container>
    )
}
}

export default DadosGerais;