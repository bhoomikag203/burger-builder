import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

let controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls} >
        <p>Total Price = <strong>Rs. {props.price}/-</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />

        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)


export default BuildControls