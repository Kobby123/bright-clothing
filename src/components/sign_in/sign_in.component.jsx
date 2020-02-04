import React from "react";
import './sign_styles.scss'
import FormInput from "../form-input/form_input.component";
import CustomButton from "../custom_button/custom_button.component";
import {connect} from 'react-redux'

import {googleSignInStart} from "../../redux/user/user.action";

import {emailSignInStart} from "../../redux/user/user.action";

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        
        const {emailSignInStart} = this.props;
        emailSignInStart(email, password);
    };



    handleChange = (event)=> {
       const {name, value} = event.target;

       this.setState({[name] : value})

    };


    render() {
        const {googleSignInStart } = this.props;
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
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn={true}>Google Sign In</CustomButton>
            </div>


                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
        googleSignInStart : () =>  dispatch(googleSignInStart()),
        emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
    }
);

export default connect(null, mapDispatchToProps)(SignIn)