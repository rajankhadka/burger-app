import React ,{Component} from 'react';

import Aux from '../../../hoc/aux'
import Button from '../../UI/Button/Button'


// const OrderSummary =(props)=>{
//     const ingredientSummary = Object.keys(props.ingredient).map((igKey)=>{
//         return (
//             <li key={igKey}>
//                 <span style={{textTransform: 'capitalize'}}> {igKey } </span>: {props.ingredient[igKey]}
//             </li>
//         );
//     })
//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious Burger with following Ingredients</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <p><strong>Total Price : { props.burgerPrice }</strong></p>
//             <p>Continue to Checkout?</p>
//             <Button btnType='Danger' clicked={props.orderCancel}>Cancel</Button>
//             <Button btnType='Success' clicked={props.orderContinue}>Continue</Button>
//         </Aux>
//     );
// }


class OrderSummary extends Component{
    componentWillUpdate(){
        console.log('[Order Summary]');
    }
    render(){
        
            const ingredientSummary = Object.keys(this.props.ingredient).map((igKey)=>{
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}> {igKey } </span>: {this.props.ingredient[igKey]}
                    </li>
                );
            })
            return (
                <Aux>
                    <h3>Your Order</h3>
                    <p>A delicious Burger with following Ingredients</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price : { this.props.burgerPrice }</strong></p>
                    <p>Continue to Checkout?</p>
                    <Button btnType='Danger' clicked={this.props.orderCancel}>Cancel</Button>
                    <Button btnType='Success' clicked={this.props.orderContinue}>Continue</Button>
                </Aux>
            );
       
    }
}

export default OrderSummary;