import React, { Component } from 'react'
import './Login.css'
import Navbar from './Navbar'

import { Navigate, Link } from 'react-router-dom'

export class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        alert("logged In")
        return (
            <Navigate to="/" />
        )

    }
    render() {
        return (
            <div className='Login'>
                <Navbar />
                <div className='Login-form-container'>


                    <form className='Login-form'>
                        <p>LawQuarium</p>

                        <div className='center-form'>
                            <h1>Sign in to Account</h1>
                            <hr />

                            <div className='input-field'>
                                <label htmlFor="email">
                                    <i className='fas fa-envelope'>Email</i>
                                </label>
                                <input type="text" name='email' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="email">
                                    <i className='fas fa-envelope'>Password</i>
                                </label>
                                <input type="password" name='password' />
                            </div>
                            <div>
                                <span className='parent-span'>
                                    <input type='checkbox' />
                                    <span>Remember me</span>
                                    <span>Forgot password?</span>
                                </span>
                            </div>  

                            <Link to='/signup' className='sign-up'>Login</Link>
                        </div>
                        <img src="book.jpg" alt="A child carrying a book on their head" />
                    </form>
                    <div className='Login-form-container-right'>
                        <h1 className='first time'>First time?</h1>
                        <hr />
                        <p>Fill up your personal details and start your journey with us.</p>
                        <Link to='/signup' className='sign-up'>Sign Up</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
