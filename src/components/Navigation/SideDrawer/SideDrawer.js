import React from 'react'
import classes from './SideDrawer.module.css'

import NavigationItems from '../NavigationItems/NavigationItems'
// import Logo from '../../Logo/Logo'


const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            {/* <Logo /> */}
            <div>LOGO</div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer