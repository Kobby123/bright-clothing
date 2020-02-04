import React from 'react';
import './App.css';
import HomePage from "./pages/hompage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up.component";
import CheckOut from "./pages/checkout/checkoutPage.component";

import {Route, Switch, Redirect} from 'react-router-dom';

import Header from "./components/header/header.component";

import {connect} from 'react-redux';


import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.action";




class App extends React.Component{

    unsubscribeFromAuth = null;
    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/shop'} component={ShopPage} />
                    <Route exact path={'/checkout'} component={CheckOut} />
                    <Route  exact path={'/signin'}
                            render={()=> this.props.currentUser ? <Redirect to={'/'}/> : <SignInAndSignUp/>}/>
                </Switch>

            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector(
    {currentUser : selectCurrentUser}
);

const mapDispatchToProps = dispatch => ({
   checkUserSession : ()=> dispatch(checkUserSession())
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
