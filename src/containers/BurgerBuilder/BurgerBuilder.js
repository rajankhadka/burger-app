import React , {Component} from 'react'


//js file importing
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE ={
    'meat': 1.3,
    'cheese' : 0.5,
    'salad' : 0.3,
    'bacon' :0.8,
}


class BurgerBuilder extends Component{

    state = {
        ingredient :{
            'meat': 0,
            'cheese' : 0,
            'salad' : 0,
            'bacon' :0,
        },
        total : 4,
        purchasable : false,
        purchasing : false,
    }

    updateIngredientHandler = (ingredient) => {
        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey];
        }).reduce((preValue,curValue)=>{
            return preValue + curValue ;
        },0);

        this.setState({
            purchasable : sum > 0
        })
    }

    addIngredientHandler = (type) =>{
        const oldValue = this.state.ingredient[type];
        let updatedCount = oldValue + 1;
        const newIngredient = {
            ...this.state.ingredient
        };
        
        newIngredient[type] = updatedCount;

        const oldPrice = this.state.total;
        let updatePrice = oldPrice + INGREDIENT_PRICE[type];
        this.setState({
            ingredient : newIngredient,
            total : updatePrice,
        })
        this.updateIngredientHandler(newIngredient)

    }

    removeIngredientHandler = (type)=>{
        const oldValue = this.state.ingredient[type];
        // console.log('[oldvalue]',oldValue);
        if(oldValue <= 0){
            return ;
        }
        
        let updatedCount = oldValue - 1;
        // console.log('[updatedCount]', updatedCount)
        const newIngredient = {
            ...this.state.ingredient
        };

        
        
        newIngredient[type] = updatedCount;
        // console.log('[newIngredient]', newIngredient)

        const oldPrice = this.state.total;
        let updatePrice = oldPrice - INGREDIENT_PRICE[type];
        // console.log('[updatePrice]', updatePrice)
        this.setState({
            ingredient : newIngredient,
            total : updatePrice,
        })

        this.updateIngredientHandler(newIngredient)


    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler =()=>{
        this.setState({
            purchasing : false,
        })
    }
    purchaseContinueHandler =()=>{
        alert('You Continue !!!')
    }


    render(){
        const disabledIngredient = {
            ...this.state.ingredient
        };

        for (let key in disabledIngredient){
            disabledIngredient[key] = disabledIngredient[key] <= 0 
        }
        // console.log(disabledIngredient);

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredient ={this.state.ingredient}
                                    burgerPrice = {this.state.total.toFixed(2)}
                                    orderCancel  = {this.purchaseCancelHandler}
                                    orderContinue ={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredient={this.state.ingredient }/>
                <BuildControls  addIngredient = {this.addIngredientHandler} 
                                removeIngredient = {this.removeIngredientHandler} 
                                disableinfo = {disabledIngredient}
                                purchasable = {!this.state.purchasable} 
                                burgerPrice = {this.state.total}
                                ordered ={this.purchaseHandler}/>
                                
            </Aux>
        );
    }
}

export default BurgerBuilder;