import React ,{Component} from 'react';

import propTypes from 'prop-types';

// css
import classes from './BurgerIngredent.module.css' 



// const burgerIngredent = props =>{

//     let ingredent = null;
    
//     switch(props.type){

//         case('bread-bottom'):
//             ingredent = <div className={classes.BreadButtom}></div>
//             break;

//         case('bread-top'):
//             ingredent = (
//                 <div className={classes.BreadTop}>
//                     <div className={classes.Seeds1}></div>
//                     <div className={classes.Seeds2}></div>
//                 </div>
//             );
//             break;

//         case('meat'):
//                 ingredent = <div className={classes.Meat}></div>
//                 break;
        
//         case('cheese'):
//             ingredent = <div className={classes.Cheese}></div>
//             break;

//         case('salad'):
//             ingredent = <div className={classes.Salad}></div>
//             break;
        
//         case('bacon'):
//         ingredent = <div className={classes.Bacon}></div>
//         break;

//         default:
//             ingredent = null;
//             break;
        

//     }
//     return ingredent;
// }


class BurgerIngredent extends Component{

    render(){
        let ingredent = null;
    
        switch(this.props.type){

            case('bread-bottom'):
                ingredent = <div className={classes.BreadBottom}></div>
                break;

            case('bread-top'):
                ingredent = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case('meat'):
                    ingredent = <div className={classes.Meat}></div>
                    break;
            
            case('cheese'):
                ingredent = <div className={classes.Cheese}></div>
                break;

            case('salad'):
                ingredent = <div className={classes.Salad}></div>
                break;
            
            case('bacon'):
            ingredent = <div className={classes.Bacon}></div>
            break;

            default:
                ingredent = null;
                break;
            

        }

    return ingredent;

        
    }
}


BurgerIngredent.propTypes ={
    type : propTypes.string.isRequired,
}

export default BurgerIngredent