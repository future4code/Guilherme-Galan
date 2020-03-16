import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.header`
    text-align:center;
    background: #BEBDB8;
    height: 10vh;
    padding-top:0.1rem;
`

const Title = styled.h2`
    color: #48494B;
`

function Header(){
    return(
        <MainHeader>
            <Title>4Task - Guilherme Galan</Title>
        </MainHeader>
    )
}

export default Header