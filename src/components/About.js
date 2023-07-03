import React from 'react'

function About() {
    return (
        <div className='about-section' id='about-section'>
            <div className='about-text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis   enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div className='about-image'>
                <img src={require('../images/restaurant.jpg')} width={270} height={340} className='img-1'></img>
                <img src={require('../images/Mario and Adrian A.jpg')} width={270} height={340} className='img-2'></img>
            </div>
        </div>
    )
}

export default About
