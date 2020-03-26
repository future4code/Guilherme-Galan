import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { routes } from "../../containers/Router";
import { push } from "connected-react-router";

import Button from '@material-ui/core/Button';

const HomeWrapper = styled.div`
    text-align:center;
`


class HomePage extends Component {
    render() {
        return (
            <HomeWrapper>
                <Button variant="outlined" onClick={this.props.formTrip}>Cadastrar para uma Viagem</Button>
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