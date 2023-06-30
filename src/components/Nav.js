import React from 'react'
import { ReactComponent as ReactLogo } from '../images/Logo.svg'
import { Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import Header from './Header';

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
        <>
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
                    <li><a href='#' className='links'><Link to='/littlelemon' className='nav-link'>Home</Link></a></li>
                    <li><a href='#' className='links'>About</a></li>
                    <li><a href='#' className='links'>Menu</a></li>
                    <li><a href='#' className='links'><Link to='/reservations' className='nav-link'>Reservations</Link></a></li>
                    <li><a href='#' className='links'>Order Online</a></li>
                    <li><a href='#' className='links'>Login</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/littlelemon' element={<Header />} />
                <Route path='/reservations' element={<BookingPage />} />
            </Routes>
        </>
    )
}

export default Nav
