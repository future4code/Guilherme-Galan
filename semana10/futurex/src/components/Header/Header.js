import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {routes} from "../../containers/Router";
import { push } from "connected-react-router";



const HeaderPages = styled.header`
    display:flex;
    justify-content:space-between;
`

class Header extends Component{
    render(){
        return(
            <HeaderPages>
                <p>Logo</p>
                <button onClick={this.props.login}>Login</button>
            </HeaderPages>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        login: () => dispatch(push(routes.login))
    }
}

export default connect(null, mapDispatchToProps)(Header)