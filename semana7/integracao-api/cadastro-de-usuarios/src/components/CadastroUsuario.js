import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`
    text-align:center;

`

const Inputs = styled.input`
    margin: 1px 1px;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class CadastroUsuario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    criarUsuario = () => {
        const novoUsuario = {
            name: this.state.name ,
            email: this.state.email
        }

        const novoUsuarioPromessa = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
            headers: {
                'api-token': "guilherme-galan",
            }
        })

        novoUsuarioPromessa.then(response =>{
            console.log(response.data)

        }).catch(error => {
            console.log(error)
        })
    }
    

    render(){
        return(
            <ContainerCadastro>
                <Inputs type="text" value={this.state.name} placeholder="Nome" onChange={this.handleChangeName} />
                <Inputs type="text" value={this.state.email} placeholder="Email" onChange={this.handleChangeEmail} />
                <button onClick={this.criarUsuario}>Criar Usuário</button>
            </ContainerCadastro>

        )
    }
}

export default CadastroUsuario;