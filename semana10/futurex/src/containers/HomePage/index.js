import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { routes } from "../../containers/Router";
import { push } from "connected-react-router";

const ButtonWrapper = styled.div`
    margin-top:80px;
`

const HomeWrapper = styled.div`
    text-align:center;
`

const Img = styled.img`
    width:400px;
    height:400px;
    border-radius:50%;
    margin-top:100px;

`


class HomePage extends Component {
    render() {
        return (
            <HomeWrapper>
                <Img src={require("../../img/futurex.png") }/>
                <ButtonWrapper>
                <button type="button" class="btn btn-success" onClick={this.props.formTrip}>Ir ao Mundo da Lua</button>
                </ButtonWrapper>
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        formTrip: () => dispatch(push(routes.form))
    }
}

export default connect(null, mapDispatchToProps)(HomePage)