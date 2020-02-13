import React from 'react'
import naoCurtido from '../../img/favorite-white.svg'
import curtido from '../../img/favorite.svg'
import comment from '../../img/comment_icon.svg'
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid black;
    width: 30vw;
    margin: 15px;
`

const ImgContainer = styled.img`
    width:100%;
`

const Usuario = styled.div`
    display:flex;
    align-items:center;
    margin:10px;
`

const ImgUsuario = styled.img`
    width:50px;
    margin-right: 10px;
    
`

const ContainerPost = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px;
`

const ContainerPostDiv = styled.div `
    display:flex;   
     
`
const ImgDiv = styled.img`
    margin-right:10px;
`

const ContainerComment = styled.div`
    text-align:center;
    margin: 10px 0;
`

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curtidas: 0,
            comentarios: 0,
            imgCurtir: naoCurtido,
            mostraInput: false
        }
    }

    aoCurtir = () => {
        if (this.state.imgCurtir === naoCurtido){
            this.setState({
                imgCurtir:curtido,
                curtidas: 1
            })
        } else{
            this.setState({
                imgCurtir:naoCurtido,
                curtidas: 0
            })
        }
    }

    aoClicarComentario = () =>{
        this.setState({
            mostraInput:true
        })
    }

    mostrarInput = (event) => {
        if(event) {
            return(
                <ContainerComment>
                    <input type="text" placeholder="Escreva seu comentário" />
                    <button onClick={this.aoComentar}>Comentar</button>
                </ContainerComment>
            )
        }
    }

    aoComentar =()=>{
        const contagemComentarios = this.state.comentarios
        this.setState({
            comentarios: contagemComentarios +1,
            mostraInput: false
        })
    }

    render() {
        return (
            <Container>
                <Usuario>
                    <ImgUsuario src={this.props.imgUsuario} />
                    <p> {this.props.nomeUsuario} </p>
                </Usuario>
                <ImgContainer src={this.props.imgPost} />
                <ContainerPost>
                    <ContainerPostDiv>
                        <ImgDiv onClick={this.aoCurtir} src={this.state.imgCurtir} />
                        <p> {this.state.curtidas} </p>
                    </ContainerPostDiv>
                    <ContainerPostDiv>
                        <ImgDiv onClick={this.aoClicarComentario} src={comment} />
                        <p>{this.state.comentarios}</p>
                    </ContainerPostDiv>                    
                </ContainerPost>
                {this.mostrarInput(this.state.mostraInput)}
            </Container >

        )
    }
}

export default Post