import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends React.Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = []
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ loading: true, orders: fetchedOrders })
            })
            .catch(err => {
                this.setState({ loading: true })
            })
    }


    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))}
            </div >
        );
    }


}

export default WithErrorHandler(Orders, axios);
