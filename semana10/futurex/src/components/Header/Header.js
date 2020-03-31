import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {routes} from "../../containers/Router";
import { push } from "connected-react-router";

const HeaderPages = styled.header`
    display:flex;
    justify-content:space-between;
    padding:0 20px 0 20px;
    background:#D9DDDC;
    height:35px;
`

const TitleHeader = styled.h4`
    color:#828282 ;
`

class Header extends Component{
    render(){
        return(
            <HeaderPages>
                <TitleHeader>FutureX - Levamos você ao mundo da Lua !!</TitleHeader>
                <div>
                    <button onClick={this.props.home} className="btn btn-outline-secondary">Home</button>
                    <button onClick={this.props.login} className="btn btn-outline-secondary">Login</button>
                </div>
            </HeaderPages>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        login: () => dispatch(push(routes.login)),
        home: () => dispatch(push(routes.home))
    }
}

export default connect(null, mapDispatchToProps)(Header)