import React from "react";
import './sign_in_and_sign_up.styles.scss';
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";


const SignInAndSignUp = ()=> {

    return (
        <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
    )

};

export default SignInAndSignUp;
