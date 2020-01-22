import React from "react";
import './sign_styles.scss'
import FormInput from "../form-input/form_input.component";
import CustomButton from "../custom_button/custom_button.component";

import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email : '' , password :''});

        }catch (e) {
           console.error(e) ;
        }

    };
    handleChange = (e)=> {
       const {name, value} = e.target;

       this.setState({[name] : value})

    };


    render() {

        return (
            <div className="sign-in">
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={'Email'}
                        type={'email' }
                        name={'email'}
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required={'required'}/>

                    <FormInput
                        label={'Password'}
                        type={'password'}
                        name={'password'}
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required={'required'}/>

            <div className="cusbuttons">
                <CustomButton type="submit" >Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Google Sign In</CustomButton>
            </div>


                </form>
            </div>
        );
    }
}

export default SignIn