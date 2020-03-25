import React, { Component } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    text-align:center;
`

const applicationForm = [
    { name: "name", type: "text", label: "Seu Nome", required: true, pattern: "[a-zA-Z ]{3,}", title:"Digite pelo menos 3 letras" },
    { name: "age", type: "number", label: "Sua Idade", required: true, min: "18" },
    { name: "applicationText", type: "textarea", label: "Motivos para ser escolhido", required: true, pattern:"[a-zA-Z0-9 ]{30,}", title:"Pelo menos 30 caracteres" },
    { name: "profession", type: "text", label: "Sua Profissão", required: true, pattern:"[a-zA-Z0-9 ]{10,}", title:"Pelo menos 10 caracteres"}
]

class FormPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            application: {},
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            application: {
                ...this.state.application,
                [name]: value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

    }

    render() {
        return (
            <FormWrapper>
                <h3>Se candidate para a melhor viagem da sua vida!!</h3>                
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                        {applicationForm.map(input => (
                            <div key={input.name}>
                                <div>
                                    <label htmlFor={input.name}>{input.label}: </label>
                                </div>
                                <input rows="3" cols="30"
                                    name={input.name}
                                    type={input.type}
                                    value={this.state.application[input.name] || ""}
                                    required={input.required}
                                    onChange={this.handleInputChange}
                                    pattern={input.pattern}
                                    min={input.min}
                                    title={input.title}
                                />
                            </div>
                        ))}
                        <button type="submit">Confirmar</button>
                    </form>
                </div>
            </FormWrapper>
        )
    }
}

export default FormPage

/*

name - minimo 3 letras
age - maior que 18
applicationText minimo 30 caracteres
profession minimo 10 caracteres
country - dropdown
tripId - Para o Usuario Mostrar um DropDown com Nome da Viagem - Planeta - e enviar o id da viagem selecionada para o Back

*/