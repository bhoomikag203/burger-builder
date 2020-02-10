import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
    state = {
        ingredients: {
            meat: 1,
            bacon: 1,
            cheese: 1,
            salad: 1
        }
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div >
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
            </div >
        );
    }


}

export default Checkout;
