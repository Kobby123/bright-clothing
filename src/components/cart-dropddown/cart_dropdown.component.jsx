import React from "react";
import CustomButton from "../custom_button/custom_button.component";
import CartItem from "../cart_item/cart_item.component";

import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from "reselect";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.action";
import './cart_dropdown.styles.scss'



const CartDropdown = ({cartItems, history, dispatch})=>

   {
      return(
          <div className="cart-dropdown">
              <div className="cart-items">
                  {
                      cartItems.length  ?
                          cartItems.map((cartItem) => (
                              <CartItem key={cartItem.id} item={cartItem}/>
                              )
                          )
                                       :
                          <span className="empty-cart">
                              Your Cart is Empty
                          </span>
                  }
              </div>
             <CustomButton onClick={()=> {
                 history.push('/checkout');
                 dispatch(toggleCartHidden())
             }

             }>CHECKOUT</CustomButton>
          </div>
      )
   };

const mapStateToProps = createStructuredSelector (
    {
        cartItems: selectCartItems
    }
);



export default withRouter(connect(mapStateToProps)(CartDropdown));