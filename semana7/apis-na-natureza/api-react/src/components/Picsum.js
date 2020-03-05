import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PicsumWrapper = styled.div `
    text-align:center;
`

const Header = styled.header`    
    height:50px;
    font-size:30px;
    margin-bottom:50px;
`



class Picsum extends Component {
    constructor(props){
        super(props)

        this.state = {
            listaDeImagens:[],           

        }
    }

    gerarListaDeImagens = async () =>{
        const response = await axios.get("https://picsum.photos/v2/list")
        this.setState({listaDeImagens : response})

        console.log(this.state.listaDeImagens)
        
    }

    render(){
        return(
            <PicsumWrapper>
                <Header>Picsum - Imagens Aleatórias</Header>
                <button className="btn btn-outline-secondary" onClick={this.gerarListaDeImagens}>Gerar Imagens</button>
                <div>
                {this.state.listaDeImagens.map((imagem) => (<img key={imagem.id} src={imagem.url} alt="imagem-aleatoria"/>))}     
                </div>        
            </PicsumWrapper>

        )
    }
}

export default Picsum