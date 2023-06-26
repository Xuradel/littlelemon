import React from 'react'
import Nav from './Nav'
function Header() {
    return (
        <header>
            <Nav></Nav>
            <div className='hero-section'>
                <div className='text-section'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className='hero-image'>
                    <img src={require('../images/restauranfood.jpg')}></img>
                </div>
            </div>
        </header>
    )
}

export default Header
