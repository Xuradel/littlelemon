import React from 'react'

function Testimonials() {
    return (
        <div className='testimonials-section'>
            <h2>Testimonials</h2>
            <div className='testimonials'>
                <div className='testimonial-card'>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className='testimonial-profile'>
                        <img src={require('../images/man1.jpg')}></img>
                        <h2>John</h2>
                    </div>
                    <p>"A culinary experience that satisfies all my cravings!" </p>
                </div>
                <div className='testimonial-card'>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className='testimonial-profile'>
                        <img src={require('../images/man2.jpg')}></img>
                        <h2>Pedro</h2>
                    </div>
                    <p>"Exceptional flavors that keep me coming back for more!"</p>
                </div>
                <div className='testimonial-card'>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className='testimonial-profile'>
                        <img src={require('../images/woman1.jpg')}></img>
                        <h2>Karla</h2>
                    </div>
                    <p>"Mouthwatering meals that never disappoint!" </p>
                </div>
                <div className='testimonial-card'>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <div className='testimonial-profile'>
                        <img src={require('../images/woman2.jpg')}></img>
                        <h2>Sophia</h2>
                    </div>
                    <p>"Delicious dishes that always leave me wanting more!" </p>
                </div>
            </div>
        </div>

    )
}

export default Testimonials
