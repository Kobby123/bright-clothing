import React from 'react'
import './sign_up.styles.scss'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from "../form-input/form_input.component";
import CustomButton from "../custom_button/custom_button.component";
import {signUpStart} from "../../redux/user/user.action";
import {connect} from 'react-redux';


class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return ;
        }
        signUpStart({email, password, displayName})
    };

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({[name] : value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and Password</span>

                <form className={"sign-up-form"} onSubmit={this.handleSubmit}>
                    <FormInput
                        type={'text'}
                        name={'displayName'}
                        value={displayName}
                        label={'Display Name'}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type={'email'}
                        name={'email'}
                        value={email}
                        label={'Email'}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type={'password'}
                        name={'password'}
                        value={password}
                        label={'Password'}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        label={'ConfirmPassword'}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type={'submit'}>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);