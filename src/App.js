import React from 'react';
import './App.css';
import HomePage from "./pages/hompage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up.component";
import CheckOut from "./pages/checkout/checkoutPage.component";

import {Route, Switch, Redirect} from 'react-router-dom';

import Header from "./components/header/header.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";




class App extends React.Component{



    unsubscribeFromAuth = null;
    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(  async authUser => {

            if(authUser){
                const userRef = await createUserProfileDocument(authUser);

                //check if the user document has updated by using the snapshot at that reference
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({id : snapShot.id, ...snapShot.data()});
                });

            }


            setCurrentUser(authUser);


        }); //End of onAuthStateChanged;
    }//end of componentDidMount



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

const mapDispatchToProps = (dispatch ) => (
    {
        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
