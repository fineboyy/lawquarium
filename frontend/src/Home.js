import React, { Component } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from "./Card"

export class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Navbar />

                <div className='container'>
                    <div className='text'>
                        <h3>How well do you know your constitution?</h3>
                        <p>Take these quizzes to test your aptitude</p>
                    </div>
                    <section className="chapters">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
                </div>           
            </div>
        )
    }
}

export default Home
