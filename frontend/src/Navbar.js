import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
          <nav>
        <div class="spaced">
          <a href="#" class="header"><span class="ezu">Answer</span><span class="ca">ium</span></a>
          <ul>
            <li class="nav-item"><a href="#" class="active">Home</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Courses</a></li>
            <li class="nav-item"><a href="#">Blog</a></li>
            <li class="nav-item"><a href="#">Contact</a></li>
            <li class="hamburger"><a href="#"><i class="fa fa-bars"></i></a></li>
            <li><a href="#"></a><i class="far fa-clipboard"></i></li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
