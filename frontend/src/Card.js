import React, { Component } from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='Card-top'>
                    <span>Chapter One</span>
                </div>
                <div className='Card-center'>
                    <p className='Card-title'>Intro to Constitution</p>
                    <p className='Card-subtitle'>Learn more about the constitution and its history</p>
                </div>
                <div className='Card-bottom'>
                    <p>1st June, 2021</p>
                    <Link to="/chapters/3r2i3ro2" className='Card-button'>Take this quiz</Link>
                </div>
            </div>
        )
    }
}

export default Card
