import React from 'react'
import { ReactComponent as ReactLogo } from '../images/Logo.svg'
function Nav() {
    return (
        <nav>
            <div className='logo'>
                <ReactLogo></ReactLogo>
            </div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservations</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav
