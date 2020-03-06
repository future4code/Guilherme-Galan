import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PicsumWrapper = styled.div `
    text-align:center;
`

const Header = styled.header`    
    height:50px;
    font-size:30px;
    margin-bottom:30px;
`

const ImagensContainer = styled.div`
    margin-top:20px;
    margin-left:50px;
    margin-bottom:30px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    grid-gap:5px;
`

const Imagem = styled.img`
    height:250px;
    width:300px;
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
        this.setState({listaDeImagens : response.data})     
        
    }

    render(){ 
        console.log(this.state.listaDeImagens)       
        return(
            <PicsumWrapper>
                <Header>Picsum - Imagens Aleatórias</Header>
                <button className="btn btn-outline-secondary" onClick={this.gerarListaDeImagens}>Gerar Imagens</button>
                <ImagensContainer>
                {this.state.listaDeImagens.map((imagem) => (<Imagem key={imagem.id} src={imagem.download_url} alt="imagem-aleatoria"/>))}     
                </ImagensContainer>        
            </PicsumWrapper>

        )
    }
}

export default Picsum