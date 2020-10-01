import React ,{Component}from 'react';
import Aux from '../../hoc/aux'

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './layout.module.css'

class Layout extends Component{
    state ={
        sidedrawclose : false,
        
    }
    sidedrawclosedHandler = () =>{
        this.setState({
            sidedrawclose : false,
        })
        // console.log('[side]',this.state.sidedrawclose)
    }

    ToggleMenuHandler = ()=>{
        this.setState((prevState)=>{
            return {sidedrawclose: !prevState.sidedrawclose}
        });
        // console.log('[siderbar]',this.state.sidedrawclose);
    }

    render(){
        return(
            <Aux>
                <Toolbar toggleMenu = {this.ToggleMenuHandler} />
                <SideDrawer 
                    closed = {this.sidedrawclosedHandler}
                    open = {this.state.sidedrawclose}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;