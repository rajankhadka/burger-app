import React from 'react';


import BuildControl from './BuildControl/BuildControl';

//css
import classes from './BuildControls.module.css';

const Controls =[
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]

const BuildControls = props => (
    <div className={classes.BuildControls}> 
        <p>Current Price is <strong>{props.burgerPrice.toFixed(2)}</strong></p>
    
        {Controls.map(control => (
            <BuildControl   key={control.label} 
                            label ={control.label}
                            add_ingredient = {() => props.addIngredient(control.type) } 
                            remove_ingredient = {()=> props.removeIngredient(control.type)}
                            disable_button = {props.disableinfo[control.type]} 
                            />
        ))}

        <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.ordered}>ORDER NOW</button>

    </div>
);

export default BuildControls;