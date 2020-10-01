import React from 'react';

import classes from './BuildControl.module.css'

const BuildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>  {props.label} </div>
        <button className={classes.Less} onClick = {props.remove_ingredient} disabled={props.disable_button}>Less</button>
        <button className = {classes.More} onClick = {props.add_ingredient}> More</button>
    </div>
);

export default BuildControl;