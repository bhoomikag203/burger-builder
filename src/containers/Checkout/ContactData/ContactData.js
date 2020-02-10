import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        }
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your details</h4>
                <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
                    <input type="email" className={classes.Input} name="email" placeholder="Your Email" />
                    <input type="text" className={classes.Input} name="street" placeholder="street" />
                    <input type="text" className={classes.Input} name="postalcode" placeholder="Postal Code " />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div >
        );
    }


}

export default ContactData;
