import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDetalhes = styled.div`

`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class DetalhesUsuario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editarNome: '',
            editarEmail: '',
            editarUsuario:false,
            usuarioClicado: {}
        }
    }
   

    usuarioClicado = async () =>{
        try{
            // // const response = await axios.get(`${baseUrl}/users/getUser/${}`,{
            // //     headers:{
            // //         'api-token': "guilherme-galan"
            // //     }
            // // })

            // this.setState({usuarioClicado: response.data.result})

        }catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <ContainerDetalhes>
                

            </ContainerDetalhes>
        )
    }
}

export default DetalhesUsuario