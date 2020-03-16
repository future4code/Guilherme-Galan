import React from 'react'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

export default function GroupSizesColors() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Marcar todas como completas</Button>
                <Button>Todas</Button>
                <Button>Pendentes</Button>
                <Button>Completas</Button>
                <Button>Remover Completas</Button>
            </ButtonGroup>
        </div>
    )
}