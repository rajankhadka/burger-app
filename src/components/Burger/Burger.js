import React from 'react';

import BurgerIngredent from './BurgerIngredent/BurgerIngredent';


//css
import classes from './Burger.module.css';



const Burger = props => {

    let transformedIngredient = Object.keys(props.ingredient).map(igkey =>{
        return ([...Array(props.ingredient[igkey])]).map((_,i)=>{
             return <BurgerIngredent key = {igkey + i} type={igkey} />
        });
    }).reduce((acc,preValue,preIndex)=>{
        return acc.concat(preValue)
    },[]);
    // console.log(transformedIngredient);

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please Add Ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            
            <BurgerIngredent type='bread-top'/>
            {transformedIngredient}
            <BurgerIngredent type='bread-bottom'/>
            
            

            
        </div>
    );
}

export default Burger;