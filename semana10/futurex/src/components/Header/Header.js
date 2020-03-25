import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderPages = styled.header`
    display:flex;
    justify-content:space-between;
`

class Header extends Component{
    render(){
        return(
            <HeaderPages>
                <p>Logo</p>
                <h2>Menu</h2>
            </HeaderPages>
        )
    }
}

export default Header