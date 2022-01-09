import React, { Component } from 'react'
import './Login.css'

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
            [evt.target.name] : evt.target.value
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
            <div className='Login content'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="images/undraw_remotely_2j6y.svg" alt="Student studying in front of computer" class="img-fluid" />
                        </div>
                        <div class="col-md-6 contents">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <div class="mb-4">
                                        <h3>Sign In</h3>
                                        <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                    </div>
                                    <form action="#" method="post">
                                    <div className={`form-group first ${this.state.email === "" ? "" : "field--not-empty"}`}>
                                            <label for="username">Email</label>
                                            <input type="text" class="form-control" id="username" value={this.state.email} onChange={this.handleChange} name='email'/>

                                        </div>
                                        <div className={`form-group last mb-4 ${this.state.password === "" ? "" : "field--not-empty"}`}>
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" value={this.state.password} onChange={this.handleChange} name='password'/>

                                        </div>

                                        <div class="d-flex mb-5 align-items-center">
                                            <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                                                <input type="checkbox" />
                                                <div class="control__indicator"></div>
                                            </label>
                                            <span class="ml-auto"><Link to="/home" class="forgot-pass" />Forgot Password</span>
                                        </div>

                                        <input type="submit" value="Log In" class="btn btn-block btn-primary" onClick={this.handleSubmit} />

                                        <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

                                        <div class="social-login">
                                            <Link to="/" class="facebook">
                                                <span class="icon-facebook mr-3"></span>
                                            </Link>
                                            <Link to="/" class="twitter">
                                                <span class="icon-twitter mr-3"></span>
                                            </Link>
                                            <Link to="/" class="google">
                                                <span class="icon-google mr-3"></span>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
