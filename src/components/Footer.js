import React from 'react'
import { ReactComponent as ReactLogo } from '../images/Logo.svg'

function Footer() {
    return (
        <footer>
            <div className='logo'>
                <ReactLogo></ReactLogo>
            </div>
            <div className='footer-links'>
                <h2>Doormat Navigation</h2>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Menu</a>
                <a href='#'>Reservations</a>
                <a href='#'>Order Online</a>
                <a href='#'>Login</a>
            </div>
            <div className='footer-links'>
                <h2>Contact</h2>
                <a href='#'>Address</a>
                <a href='#'>Phone number</a>
                <a href='#'>Email</a>
            </div>
            <div className='footer-links'>
                <h2>Social Media Links</h2>
                <a href='#'>Address</a>
                <a href='#'>Phone number</a>
                <a href='#'>Email</a>
            </div>
        </footer>
    )
}

export default Footer
