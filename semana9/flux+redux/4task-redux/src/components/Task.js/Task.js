import React, { Component } from 'react'
import styled from 'styled-components'
import CheckboxList from './List';

import Input from '@material-ui/core/Input';
import GroupSizesColors from './Button';

const TaskWrapper = styled.div`
    background: #C7C6C1;
    text-align:center;
    margin:40px auto;    
    border:1px solid black;
    width: 50vw;
    height:65vh;
`

class Task extends Component{
    constructor(props){
        super(props)
    } 
    render(){
        return(
            <TaskWrapper>
                <h2>Task List</h2>
                <Input placeholder="Digite uma tarefa..."></Input>
                <CheckboxList />
                <GroupSizesColors /> 
            </TaskWrapper>
        )
    }
}

export default Task