import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
// import Logo from '../../Logo/Logo'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div>Logo</div>
        {/* <Logo /> */}
        <nav>
            <NavigationItems />
        </nav>
    </header>
)



export default Toolbar