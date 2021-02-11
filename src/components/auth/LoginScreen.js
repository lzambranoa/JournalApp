import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassWord } from '../../actions/auth';
import { setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'leonardo@hotmail.com',
        password: '12356'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if(isValidate()){
            dispatch(startLoginEmailPassWord(email, password));
        }
    }

    // este metodo se llama al momento de llamar el boton
    // de login con google
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const handleEmailLogin = () => {
        dispatch(startLoginEmailPassWord(email, password));
    }

    const isValidate = () => {
        if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'))
            return false;
        } 
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form 
            className="animate_animated animate_fadeIn animate_faster"    
            onSubmit={handleLogin} 
            >

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleEmailLogin}
                    disabled={ loading }
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
