import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../cart_icon/cart_icon.component";
import {connect} from 'react-redux';
import CartDropdown from "../cart-dropddown/cart_dropdown.component";
import {auth} from "../../firebase/firebase.utils";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser, hidden}) => {
    return(
      <div className="header">
          <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'}/>
          </Link>

          <div className="options">
              <Link className={'option'} to={'/shop'}>
                  SHOP
              </Link>
              <Link className={'option'} to={'/shop'}>
                  CONTACT
              </Link>
                  {
                      currentUser ?
                          <div  className={'option'} onClick={()=> auth.signOut()}>SIGN OUT</div>
                          :
                          <Link to={'/signin'}>SIGN IN</Link>
                  }
              <CartIcon/>
          </div>
              {
                  hidden ? null : <CartDropdown/>
              }
      </div>

    );

};

const mapStateToProps = createStructuredSelector(
   {
                currentUser : selectCurrentUser,
                hidden      : selectCartHidden
            }
);




export default connect(mapStateToProps)(Header);