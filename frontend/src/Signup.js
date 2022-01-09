import React, { Component } from 'react'
import  {Link} from 'react-router-dom'

export class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullname: "",
            email: "",
            password: "",
            retypedPassword: "",
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
        let newUser = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
        }

        alert("You have been registered.")
        return

    }



    render() {
        return (
            <div className='Signup'>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="images/undraw_remotely_2j6y.svg" alt="Student in front of computer" class="img-fluid" />
                            </div>
                            <div class="col-md-6 contents">
                                <div class="row justify-content-center">
                                    <div class="col-md-8">
                                        <div class="mb-4">
                                            <h3>Sign Up</h3>
                                            <p class="mb-4">Register right now and kickstart your journey to mastering the constitution!</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className={`form-group first ${this.state.fullname === "" ? "" : "field--not-empty"}`}>
                                                <label htmlFor="fullname">Full name</label>
                                                <input type="text" class="form-control" id="fullname" value={this.state.fullname} name='fullname' onChange={this.handleChange}/>

                                            </div>
                                            <div className={`form-group ${this.state.email === "" ? "" : "field--not-empty"}`}>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" class="form-control" id="email" value={this.state.email} name='email' onChange={this.handleChange}/>

                                            </div>
                                            <div className={`form-group ${this.state.password === "" ? "" : "field--not-empty"}`}>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" class="form-control" id="password" value={this.state.password} name='password' onChange={this.handleChange}/>

                                            </div>
                                            <div className={`form-group last mb-4 ${this.state.retypedPassword === "" ? "" : "field--not-empty"}`}>
                                                <label htmlFor="re-password">Re-type Password</label>
                                                <input type="password" class="form-control" id="re-password" value={this.state.retypedPassword} name='retypedPassword' onChange={this.handleChange}/>

                                            </div>

                                            <div class="d-flex mb-5 align-items-center">
                                                <label class="control control--checkbox mb-0"><span class="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>
                                                    <input type="checkbox" checked="checked" />
                                                    <div class="control__indicator"></div>
                                                </label>
                                            </div>

                                            <input type="submit" value="Register" class="btn btn-block btn-primary" onClick={this.handleSubmit}/>

                                            <span class="d-block text-left my-4 text-muted">&mdash; or register with &mdash;</span>

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
            </div>
        )
    }
}

export default Signup
