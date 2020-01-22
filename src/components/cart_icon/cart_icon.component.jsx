import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg";

import './cart_icon.styles.scss'

import {toggleCartHidden} from '../../redux/cart/cart.action.js'
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector (
    {
        itemCount : selectCartItemsCount
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden : () => dispatch(toggleCartHidden())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);