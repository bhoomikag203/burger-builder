import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends React.Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>{igKey}:{this.props.ingredients[igKey]}</span>
                    </li>
                )
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: Rs.{this.props.price}/-</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}


export default OrderSummary
