import React from 'react'
import * as mu from '@material-ui/core'
import { Link } from 'react-router-dom'

function Login() {
    return (
      <div className="container">
            <mu.Paper elevation={6} className="container__login-form">
                <p className="container__login-form__header">Welcome</p>
            <input type="email" className="container__login-form__input" placeholder="Email" />
            <input type="password" className="container__login-form__input" placeholder="Password"/>
            <button className="container__login-form__button">Log In</button>
            <p>Not a Member ? <Link className="container__login-form__signup-link" to="/sign-up">Sign Up Now</Link></p>
            <Link className="container__login-form__signup-link" to="/forgot-password">Forgot Password</Link>

            </mu.Paper>
      </div>
    )
}

export default Login
