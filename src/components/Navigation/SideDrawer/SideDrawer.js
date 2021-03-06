import React from 'react'
import classes from './SideDrawer.module.css'

import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'
// import Logo from '../../Logo/Logo'


const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                {/* <Logo /> */}
                <div>LOGO</div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    )
}

export default SideDrawer