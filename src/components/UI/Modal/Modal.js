import React ,{Component} from 'react';

import Aux from '../../../hoc/aux';
import BackDrop from '../BackDrop/BackDrop';

import classes from './Modal.module.css';



// const Modal = (props) =>(

//     <Aux>
//         <BackDrop show={props.show} clicked={props.modalClosed}/>
//         <div 
//             className={classes.Modal}
//             style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                     opacity : props.show ? 1 : 0}}>
//             {props.children}
//         </div>
//     </Aux>
// )

class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        console.log('[should Component Update]');
        return (this.props.show !== nextProps.show)
    }
    render(){
        return(
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity : this.props.show ? 1 : 0}}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
