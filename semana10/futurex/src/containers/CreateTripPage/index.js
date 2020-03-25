import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'


const CreateWrapper = styled.div`
    text-align:center;
`

const createTripForm = [
    { name: "name", type: "text", label: "Nome da Viagem", required: true, pattern: "[a-zA-Z ]{5,}", title: "Mínimo 5 letras, Maiúsculas ou Minúsculas" },
    { name: "date", type: "date", label: "Data da Viagem", required: true },
    { name: "description", type: "text", label: "Descrição da Viagem", required: true, pattern: "[a-zA-Z0-9 ]{30,}", title: "Descreva com pelo menos 30 caractéres(Letras ou Números)." },
    { name: "durationInDays", type: "number", label: "Duração da Viagem em dias", required: true, min: "50" }

]

class CreateTripPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
            planets: ["Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]
        }
    }

    componentDidMount(){
        const token = window.localStorage.getItem("token")

        if(token === null){
            this.props.goToLogin()
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log(this.state.form)
    }

    render() {
        return (
            <CreateWrapper>
                <h1>Criar uma Viagem</h1>
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                        {createTripForm.map(input => (
                            <div key={input.name}>
                                <div>
                                    <label htmlFor={input.name}>{input.label}: </label>
                                </div>
                                <input rows="3" cols="30"
                                    name={input.name}
                                    type={input.type}
                                    value={this.state.form[input.name] || ""}
                                    required={input.required}
                                    onChange={this.handleInputChange}
                                    pattern={input.pattern}
                                    min={input.min}
                                    title={input.title}
                                />
                            </div>
                        ))}
                        <select>
                            <option key={"escolha"}>Escolha o Planeta</option>
                            {this.state.planets.map((planet, index) => (
                                <option key={index} value={planet}>{planet}</option>
                            ))}
                        </select>
                        <button type="submit">Criar Trip</button>
                    </form>
                </div>
            </CreateWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps)(CreateTripPage)



/*  Form de Criação de Viagem

name - mínimo 5 letras

planet - DropDown com todos os Planetas

date - Data no Futuro

description - Mínimo 30 Letras

durationInDays - Mínimo 50

*/