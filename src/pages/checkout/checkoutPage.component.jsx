import React from 'react'

import './checkout.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout_item/checkout_item.component";
import StripeCheckoutButton from "../../components/stripe_button/stripe_button.component";


const CheckOutPage = ({cartItems, cartTotal})=> (

    <div className={'checkout-page'}>
        <div className="checkout-header">
            <div className="header-block">
                {'Product'}
            </div>
            <div className="header-block">
                {'Description'}
            </div>
            <div className="header-block">
                {'Quantity'}
            </div>
            <div className="header-block">
                {'Price'}
            </div>
            <div className="header-block">
                {'Remove'}
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className="total">
            <span>TOTAL: GH¢{cartTotal}</span>

        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotal}/>

    </div>

);

const mapStateToProps = createStructuredSelector(
    {
                cartItems : selectCartItems,
                cartTotal : selectCartTotal
            }
);

export default connect(mapStateToProps)(CheckOutPage);
