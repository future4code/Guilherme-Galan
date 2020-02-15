import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top:20px;
    
`

const Form = styled.form`
    display:flex;
    flex-direction:column; 
     

`

class FormPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            fotoUsuario: "",
            fotoPost: ""

        }
    }
    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }
    onChangeFotoUsuario = (event) => {
        this.setState({ fotoUsuario: event.target.value })
    }
    onChangeFotoPost = (event) => {
        this.setState({ fotoPost: event.target.value })
    }

    onClickEnviar = (event) => {
        this.props.onCriaPost(
            {nomeUsuario: this.state.nome },
            {imgUsuario: this.state.fotoUsuario}, 
            {imgPost: this.state.fotoPost})
    }

    render(){
        return (
            <Container>
                <Form>
                    <label>Autor do Post</label>
                    <input type="text" value={this.state.nome} onChange={this.onChangeNome} />
                    <label>Foto do Autor</label>
                    <input type="text" value={this.state.fotoUsuario} onChange={this.onChangeFotoUsuario} />
                    <label>Foto do Post</label>
                    <input type="text" value={this.state.fotoPost} onChange={this.onChangeFotoPost} />
                    <button onClick={this.onClickEnviar}>Publicar</button>
                </Form>
            </Container>
        )
    }
}



export default FormPost