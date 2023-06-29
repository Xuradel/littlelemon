import React from 'react'
import { ReactComponent as ReactLogo } from '../images/Logo.svg'

let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('hide');
//     hamburger.classList.toggle('lines-rotate');
// })

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', () => {
//         navLinks.classList.toggle('hide');
//     })
// }

function Nav() {
    return (
        <nav className='nav-container'>
            <div className='logo'>
                <ReactLogo className='logo-img'></ReactLogo>
            </div>
            <div className='hamburger'>
                <span className='lines'></span>
                <span className='lines'></span>
                <span className='lines'></span>
            </div>
            <ul id='nav-links'>
                <li><a href='#' className='links'>Home</a></li>
                <li><a href='#' className='links'>About</a></li>
                <li><a href='#' className='links'>Menu</a></li>
                <li><a href='#' className='links'>Reservations</a></li>
                <li><a href='#' className='links'>Order Online</a></li>
                <li><a href='#' className='links'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav
