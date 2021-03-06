import React from 'react'
import styled from 'styled-components'

import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Remove = styled.button`
    color:red;
    border:none;
    background: #D9DDDC;
`
const useStyles = makeStyles(theme => ({
    root: {   
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#D9DDDC',
      margin: '10px auto',
    },
  }));
  
  export default function CheckboxList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
  
    const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
    return (
      <List className={classes.root}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`;  
          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}                  
                />                
              </ListItemIcon>              
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> 
              <Remove>x</Remove>
            </ListItem>
          );
        })}
      </List>
    );
  }