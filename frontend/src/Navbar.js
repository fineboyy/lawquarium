import React, { Component } from 'react'
import './Navbar.css'

import { Navigate, Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="title">
          <i className="fas fa-man"></i>
          <Link to="/">LawQuarium</Link>
        </div>

        <div className="navlinks">
          <Link to="/" className="nav-item">Questions</Link>
          <Link to="/" className="nav-item">Students</Link>
          <Link to="/" className="nav-item">Community</Link>
          <Link to="/" className="nav-item">About us</Link>
        </div>

        <div className="onboarding-buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="signup" className="sign-up-button">Sign Up</Link>
        </div>
      </header>
    )
  }
}

export default Navbar
