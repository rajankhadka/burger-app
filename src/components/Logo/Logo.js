import React from 'react';

import burgerImage from '../../asstes/images/logo.png';
import classes from './Logo.module.css';

const logo =props =>(
    <div className={classes.Logo}>
        <img src={burgerImage} alt="Burger Image"></img>
    </div>
);

export default logo;