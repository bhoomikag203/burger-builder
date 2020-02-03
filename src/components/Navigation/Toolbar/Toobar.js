import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
// import Logo from '../../Logo/Logo'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div>Logo</div>
        {/* <Logo /> */}
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)



export default Toolbar