import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../cart_icon/cart_icon.component";
import {connect} from 'react-redux';
import CartDropdown from "../cart-dropddown/cart_dropdown.component";
import {auth} from "../../firebase/firebase.utils";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styled";

const Header = ({currentUser, hidden}) => {
    return(
      <HeaderContainer>

          <LogoContainer to={'/'}>
            <Logo className={'logo'}/>
          </LogoContainer>

          <OptionsContainer>
              <OptionLink to={'/shop'}>SHOP</OptionLink>
              <OptionLink  to={'/shop'}>CONTACT</OptionLink>
                  {
                      currentUser ?
                          <OptionLink as={'div'}  onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                          :
                          <OptionLink to={'/signin'}>SIGN IN</OptionLink>
                  }
              <CartIcon/>
          </OptionsContainer>
              {
                  hidden ? null : <CartDropdown/>
              }
      </HeaderContainer>

    );

};

const mapStateToProps = createStructuredSelector(
   {
                currentUser : selectCurrentUser,
                hidden      : selectCartHidden
            }
);




export default connect(mapStateToProps)(Header);