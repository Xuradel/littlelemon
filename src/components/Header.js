import React from 'react'
import Main from './Main'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


function Header() {

    const navigate = useNavigate()

    return (
        <>
            <header>
                <div className='hero-section'>
                    <div className='text-section'>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button onClick={()=> navigate('/reservations')}>Reserve a Table</button>
                    </div>
                    <div className='hero-image'>
                        <img src={require('../images/restauranfood.jpg')}></img>
                    </div>
                </div>

            </header>
            <Main>

            </Main>
            <Footer>

            </Footer>
        </>
    )
}

export default Header
