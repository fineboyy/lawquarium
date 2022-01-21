import React, { Component } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from "./Card"

export class Home extends Component {
    render() {
        return (
            <div className="Home">

                <Navbar />

                <div className="main-area">
                    <div className="text-area">
                        <p className="title-text">
                            Practice Test Questions? We Got You Covered!
                        </p>
                        <p className="subtitle-text">Examine your knowledge by taking tests from a wide array of carefully crafted
                            questions by our expert tutors.</p>
                        <button className="get-started-button">Get Started</button>
                    </div>
                    <div className="image-container">
                        <img src="images/graduate_students.jpg" alt="Graduate Students celebrating" />
                    </div>

                </div>

                <footer className="footer">
                    <p>&copy; 2022. All Rights Reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Home
